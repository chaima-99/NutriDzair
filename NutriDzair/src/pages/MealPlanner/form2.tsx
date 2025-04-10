import "./hero.css"
import {
    Button,
    // ButtonGroup,
    Steps,
    Field,
    Input,
    InputGroup,
    RadioGroup,
    Slider,
    Select,
    Portal,
    createListCollection,
    // NumberInput,
} from "@chakra-ui/react"
import { useEffect, useState, useRef } from "react"
import { useForm, Controller } from "react-hook-form"
import { Icon } from "@chakra-ui/react"
//******************************************** Icons ******************************************** /
import { FaFireAlt } from "react-icons/fa";



export default function Form2({ Data }: { Data: Record<string, any> }) {
    const [formFilled, setFormFilled] = useState(false)
    const nextBtn = useRef<HTMLButtonElement>(null)
    const [caloriesType, setCaloriesType] = useState("")
    const [step, setStep] = useState(0)
    const [invalidCalories, setInvalidCalories] = useState(false)
    const [invalidCaloriesRange, setInvalidCaloriesRange] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
    } = useForm<FormValues>({
        defaultValues: {
            caloriesType: "",
            calories: "",
            caloriesMin: "",
            caloriesMax: "",
            restriction: "",
            allergy: "",
            carbs: "50",
            protein: "50",
            fat: "50"
        }
    })
    const watchall = watch()
    const minInput = useRef(null)
    const maxInput = useRef(null)

    const onSubmit = (data: FormValues) => {
        // Validate the form data before proceeding to the next step
        if (isValidForm(data)) {
            setStep(step + 1) // Manually advance to the next step if form is valid
            nextBtn.current?.click() // Trigger the next button click
            console.log("Form is valid")
            Object.assign(Data, data)
        } else {
            // Set form filled to false if validation fails
            setFormFilled(false)
            console.log("Form is not valid")
        }
    }

    function handleChange(form: FormValues) {
        console.log("Form being checked:", form);

        // Check if caloriesType is selected
        if (!form.caloriesType) {
            setFormFilled(false);
            console.log("No calories type selected");
            return;
        }

        // Check based on calories type
        if (form.caloriesType === "exactValue") {
            // If exact value is selected, check if calories is filled
            if (!form.calories || form.calories.trim() === "") {
                setFormFilled(false);
                console.log("Exact calories not provided");
                return;
            }
        } else if (form.caloriesType === "Range") {
            // If range is selected, check if both min and max are filled
            if (!form.caloriesMin || !form.caloriesMax || form.caloriesMin.trim() === "" || form.caloriesMax.trim() === "") {
                setFormFilled(false);
                console.log("Min/Max calories not both provided");
                return;
            }
        }

        // Check required fields except calorie fields
        const requiredFields = ["restriction", "allergy"];
        for (const field of requiredFields) {
            if (!form[field as keyof FormValues]) {
                setFormFilled(false);
                console.log(`Missing required field: ${field}`);
                return;
            }
        }

        setFormFilled(true);
        console.log("Form filled: true");
    }

    function isValidInput(inputType: string, value: string) {
        if (!value || value.length === 0) {
            return inputType !== "caloriesType" &&
                !(inputType === "calories" && caloriesType === "exactValue") &&
                !((inputType === "caloriesMin" || inputType === "caloriesMax") && caloriesType === "Range");
        }

        switch (inputType) {
            case "caloriesType":
                return value === "Range" || value === "exactValue";
            case "calories":
                if (caloriesType !== "exactValue" ||
                    (!isNaN(parseInt(value)) && Number.isInteger(parseFloat(value)) && isFinite(parseInt(value)) && parseInt(value) >= 1000 && parseInt(value) <= 5000)) {
                    setInvalidCalories(false);
                    return true;
                }
                setInvalidCalories(true);
                return false;
            case "caloriesMin":
                if (caloriesType !== "Range" ||
                    (!isNaN(parseInt(value)) && Number.isInteger(parseFloat(value)) && isFinite(parseInt(value)) && parseInt(value) >= 1000)) {
                    setInvalidCaloriesRange(false);
                    return true;
                }
                setInvalidCaloriesRange(true);
                return false;
            case "caloriesMax":
                if (caloriesType !== "Range" ||
                    (!isNaN(parseInt(value)) && Number.isInteger(parseFloat(value)) && isFinite(parseInt(value)) && parseInt(value) > 0 && parseInt(value) <= 5000)) {
                    setInvalidCaloriesRange(false);
                    return true;
                }
                setInvalidCaloriesRange(true);
                return false;
            default:
                return true;
        }
    }



    function isValidForm(form: FormValues) {
        // Check caloriesType is selected
        if (!form.caloriesType) return false;

        // Validate based on caloriesType
        if (form.caloriesType === "exactValue") {
            if (!form.calories || !isValidInput("calories", form.calories)) return false;
        } else if (form.caloriesType === "Range") {
            if (!form.caloriesMin || !isValidInput("caloriesMin", form.caloriesMin)) return false;
            if (!form.caloriesMax || !isValidInput("caloriesMax", form.caloriesMax)) return false;

            // Check if max is greater than min
            if (parseInt(form.caloriesMax) <= parseInt(form.caloriesMin)) {
                setInvalidCaloriesRange(true);
                return false;
            } else {
                setInvalidCaloriesRange(false);
            }
        } else {
            return false;
        }

        

        // Check other required fields
        if (!form.restriction || !form.allergy) return false;

        return true;
    }

    useEffect(() => {
        handleChange(watchall)
    }, [watchall])

    // Handle restriction change
    const handleRestrictionChange = (value: any) => {
        if (value && value.value) {
            setValue("restriction", value.value.toString());
            setTimeout(() => {
                handleChange({ ...watchall, restriction: value.value.toString() });
            }, 0);
        }
    };

    // Handle allergy change
    const handleAllergyChange = (value: any) => {
        if (value && value.value) {
            setValue("allergy", value.value.toString());
            setTimeout(() => {
                handleChange({ ...watchall, allergy: value.value.toString() });
            }, 0);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Field.Root className="field" width={"50%"}>
                <Field.Label className="label">Daily Calories</Field.Label>

                <Controller
                    name="caloriesType"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup.Root
                            className="radio-group"
                            colorPalette={"green"}
                            value={field.value}
                            onValueChange={(value) => {
                                if (value && value.value) {
                                    const caloriesTypeValue = value.value.toString();
                                    field.onChange(caloriesTypeValue);
                                    setCaloriesType(caloriesTypeValue);
                                    setValue("caloriesType", caloriesTypeValue);
                                    console.log("caloriesType selected:", caloriesTypeValue);
                                }
                            }}
                        >
                            <RadioGroup.Item key={1} value={"Range"} className="radio-item">
                                <RadioGroup.ItemHiddenInput />
                                <RadioGroup.ItemIndicator style={{ border: "1px solid green" }} />
                                <RadioGroup.ItemText>{"Range"}</RadioGroup.ItemText>
                            </RadioGroup.Item>

                            <RadioGroup.Item key={2} value={"exactValue"} className="radio-item">
                                <RadioGroup.ItemHiddenInput />
                                <RadioGroup.ItemIndicator style={{ border: "1px solid green" }} />
                                <RadioGroup.ItemText>{"Exact value"}</RadioGroup.ItemText>
                            </RadioGroup.Item>
                        </RadioGroup.Root>
                    )}
                />
            </Field.Root>

            {caloriesType === "exactValue" &&
                <Field.Root className="field" marginBottom={"1rem"} width={"100%"} invalid={invalidCalories}>
                    <InputGroup startElement={<Icon as={FaFireAlt} className="icon" />}>
                        <Input
                            {...register("calories")}
                            className="input"
                            size="lg"
                            placeholder="Enter calories..."
                            onChange={(e) => {
                                setValue("calories", e.target.value);
                                handleChange({ ...watchall, calories: e.target.value });
                            }}
                        />
                    </InputGroup>
                    <Field.ErrorText>{errors.calories?.message}</Field.ErrorText>
                </Field.Root>
            }

            {caloriesType === "Range" &&
                <Field.Root className="" width={"100%"} marginBottom={"1rem"} display={"flex"} flexDirection={"column"} gap={"1rem"} invalid={invalidCaloriesRange}>
                    <InputGroup startElement={<Icon as={FaFireAlt} className="icon" />}>
                        <Input
                            {...register("caloriesMin")}
                            className="input"
                            ref={minInput}
                            size="lg"
                            placeholder="Min..."
                            onChange={(e) => {
                                setValue("caloriesMin", e.target.value);
                                handleChange({ ...watchall, caloriesMin: e.target.value });
                            }}
                        />
                    </InputGroup>
                    <InputGroup startElement={<Icon as={FaFireAlt} className="icon" />}>
                        <Input
                            {...register("caloriesMax")}
                            className="input"
                            size="lg"
                            ref={maxInput}
                            placeholder="Max..."
                            onChange={(e) => {
                                setValue("caloriesMax", e.target.value);
                                handleChange({ ...watchall, caloriesMax: e.target.value });
                            }}
                        />
                    </InputGroup>
                    <Field.ErrorText>{errors.caloriesRange?.message}</Field.ErrorText>
                </Field.Root>
            }

            <Field.Root className="field" width={"50%"}>
                <Field.Label className="label">Macronutrient Preferences from low to high</Field.Label>
                <Slider.Root {...register("carbs")} defaultValue={[50]} step={50} size={"lg"} style={{ width: "100%" }} colorPalette={"green"} className="slider">
                    <Slider.Label className="label">Carbs</Slider.Label>
                    <Slider.Control >
                        <Slider.Track >
                            <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                        <Slider.Marks marks={[0, 50, 100]} style={{ color: "red" }} />
                    </Slider.Control >
                </Slider.Root>

                <Slider.Root {...register("protein")} defaultValue={[50]} step={50} size={"lg"} style={{ width: "100%" }} colorPalette={"green"} className="slider">
                    <Slider.Label className="label">Protein</Slider.Label>
                    <Slider.Control >
                        <Slider.Track >
                            <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                        <Slider.Marks marks={[0, 50, 100]} style={{ color: "red" }} />
                    </Slider.Control >
                </Slider.Root>

                <Slider.Root {...register("fat")} defaultValue={[50]} step={50} size={"lg"} style={{ width: "100%" }} colorPalette={"green"} className="slider">
                    <Slider.Label className="label">Fat</Slider.Label>
                    <Slider.Control >
                        <Slider.Track >
                            <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                        <Slider.Marks marks={[0, 50, 100]} style={{ color: "red" }} />
                    </Slider.Control >
                </Slider.Root>
            </Field.Root>


            <Field.Root className="field" flexDirection={"row"} width={"50%"} marginBottom={"1rem"} >
                <Select.Root
                    {...register("restriction")}
                    collection={ristrictions}
                    size="lg"
                    colorPalette={"green"}
                    marginTop={"1rem"}
                    onValueChange={handleRestrictionChange}
                >
                    <Select.HiddenSelect />
                    <Select.Label>Dietary Restrictions</Select.Label>
                    <Select.Control className="select">
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select a restriction" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {ristrictions.items.map((restriction) => (
                                    <Select.Item item={restriction} key={restriction.value}>
                                        {restriction.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>

                <Select.Root
                    {...register("allergy")}
                    collection={allergies}
                    size="lg"
                    colorPalette={"green"}
                    marginTop={"1rem"}
                    onValueChange={handleAllergyChange}
                >
                    <Select.HiddenSelect />
                    <Select.Label>Allergies</Select.Label>
                    <Select.Control className="select">
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select an allergy" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {allergies.items.map((allergy) => (
                                    <Select.Item item={allergy} key={allergy.value}>
                                        {allergy.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>
            </Field.Root>

            <Steps.NextTrigger asChild disabled={!formFilled} className="next-btn">
                <Button variant="outline" size="lg" className="next-btn" ref={nextBtn} style={{ display: "none" }} >
                    trigger
                </Button>
            </Steps.NextTrigger>
            <input type="submit" value="Continue" className="submit-btn" disabled={!formFilled} />
        </form>
    )
}

interface FormValues {
    caloriesType: string;
    calories: string;
    caloriesMin: string;
    caloriesMax: string;
    carbs: string;
    protein: string;
    fat: string;
    restriction: string
    allergy: string;
}
const ristrictions = createListCollection({
    items: [
        { label: "Vegan", value: "vegan" },
        { label: "Vegetarian", value: "vegetarian" },
        { label: "Gluten-Free", value: "gluten_free" },
        { label: "Keto", value: "keto" },
        { label: "Paleo", value: "paleo" },
        { label: "Dairy-Free", value: "dairy_free" },
        { label: "Nut-Free", value: "nut_free" },
    ],
})
const allergies = createListCollection({
    items: [
        { label: "Peanuts", value: "peanuts" },
        { label: "Tree Nuts", value: "tree_nuts" },
        { label: "Milk", value: "milk" },
        { label: "Eggs", value: "eggs" },
        { label: "Shellfish", value: "shellfish" },
        { label: "Fish", value: "fish" },
        { label: "Wheat", value: "wheat" },
        { label: "Soy", value: "soy" },
    ],
})
const errors = {
    calories: {
        message: "Please enter a valid positive integer for calories",
    },
    caloriesRange: {
        message: "Please enter a valid positive integer for the calories in range 1000 to 5000",
    },
    rangeError: {
        message: "Maximum calories must be greater than minimum calories",
    }
}