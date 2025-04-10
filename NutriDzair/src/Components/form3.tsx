import {
    Button,
    Steps,
    Field,
    Input,
    InputGroup,
    RadioGroup,
    Slider,
    Select,
    Portal,
    createListCollection,
} from "@chakra-ui/react"
import { useEffect, useState, useRef } from "react"
import { useForm, Controller } from "react-hook-form"
import { Icon } from "@chakra-ui/react"
//******************************************** Icons ******************************************** /
import { FaDollarSign } from "react-icons/fa";

export default function Form3({ Data }: { Data: Record<string, any> }) {
    const [formFilled, setFormFilled] = useState(false)
    const nextBtn = useRef<HTMLButtonElement>(null)
    const [budgetType, setBudgetType] = useState("")
    const [step, setStep] = useState(0)
    const [invalidBudget, setInvalidBudget] = useState(false)
    const [invalidBudgetRange, setInvalidBudgetRange] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
    } = useForm<FormValues>({
        defaultValues: {
            budgetType: "",
            budget: "",
            budgetMin: "",
            budgetMax: "",
            cuisine: "",
            variety: "",
            deliciousness: "50",
            price: "50",
            calories: "50"
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

        // Check if budgetType is selected
        if (!form.budgetType) {
            setFormFilled(false);
            console.log("No budget type selected");
            return;
        }

        // Check based on budget type
        if (form.budgetType === "exactValue") {
            // If exact value is selected, check if budget is filled
            if (!form.budget || form.budget.trim() === "") {
                setFormFilled(false);
                console.log("Exact budget not provided");
                return;
            }
        } else if (form.budgetType === "Range") {
            // If range is selected, check if both min and max are filled
            if (!form.budgetMin || !form.budgetMax || form.budgetMin.trim() === "" || form.budgetMax.trim() === "") {
                setFormFilled(false);
                console.log("Min/Max budget not both provided");
                return;
            }
        }

        // Check required fields except budget fields
        const requiredFields = ["cuisine", "variety"];
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
            return inputType !== "budgetType" &&
                !(inputType === "budget" && budgetType === "exactValue") &&
                !((inputType === "budgetMin" || inputType === "budgetMax") && budgetType === "Range");
        }

        switch (inputType) {
            case "budgetType":
                return value === "Range" || value === "exactValue";
            case "budget":
                if (budgetType !== "exactValue" ||
                    (!isNaN(parseFloat(value)) && isFinite(parseFloat(value)) && parseFloat(value) >= 3000 && parseFloat(value) <= 20000)) {
                    setInvalidBudget(false);
                    return true;
                }
                setInvalidBudget(true);
                return false;
            case "budgetMin":
                if (budgetType !== "Range" ||
                    (!isNaN(parseFloat(value)) && isFinite(parseFloat(value)) && parseFloat(value) >= 3000)) {
                    setInvalidBudgetRange(false);
                    return true;
                }
                setInvalidBudgetRange(true);
                return false;
            case "budgetMax":
                if (budgetType !== "Range" ||
                    (!isNaN(parseFloat(value)) && isFinite(parseFloat(value)) && parseFloat(value) > 3000 && parseFloat(value) <= 20000)) {
                    setInvalidBudgetRange(false);
                    return true;
                }
                setInvalidBudgetRange(true);
                return false;
            default:
                return true;
        }
    }

    function isValidForm(form: FormValues) {
        // Check budgetType is selected
        if (!form.budgetType) return false;

        // Validate based on budgetType
        if (form.budgetType === "exactValue") {
            if (!form.budget || !isValidInput("budget", form.budget)) return false;
        } else if (form.budgetType === "Range") {
            if (!form.budgetMin || !isValidInput("budgetMin", form.budgetMin)) return false;
            if (!form.budgetMax || !isValidInput("budgetMax", form.budgetMax)) return false;
            
            // Check if min is less than max
            if (parseFloat(form.budgetMin) >= parseFloat(form.budgetMax)) {
                setInvalidBudgetRange(true);
                return false;
            }
        } else {
            return false;
        }

        // Check other required fields
        if (!form.cuisine || !form.variety) return false;

        return true;
    }

    useEffect(() => {
        handleChange(watchall)
    }, [watchall])

    // Handle cuisine change
    const handleCuisineChange = (value: any) => {
        if (value && value.value) {
            setValue("cuisine", value.value.toString());
            setTimeout(() => {
                handleChange({ ...watchall, cuisine: value.value.toString() });
            }, 0);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Field.Root className="field" style={{width:"100%"}}>
                <Field.Label className="label">Weekly budget (DA)</Field.Label>

                <Controller
                    name="budgetType"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup.Root
                            className="radio-group"
                            colorPalette={"green"}
                            value={field.value}
                            onValueChange={(value) => {
                                if (value && value.value) {
                                    const budgetTypeValue = value.value.toString();
                                    field.onChange(budgetTypeValue);
                                    setBudgetType(budgetTypeValue);
                                    setValue("budgetType", budgetTypeValue);
                                    console.log("budgetType selected:", budgetTypeValue);
                                }
                            }}
                        >
                            <RadioGroup.Item key={1} value={"Range"} className="radio-item">
                                <RadioGroup.ItemHiddenInput />
                                <RadioGroup.ItemIndicator style={{ border: "1px solid green" }} />
                                <RadioGroup.ItemText>Range</RadioGroup.ItemText>
                            </RadioGroup.Item>

                            <RadioGroup.Item key={2} value={"exactValue"} className="radio-item">
                                <RadioGroup.ItemHiddenInput />
                                <RadioGroup.ItemIndicator style={{ border: "1px solid green" }} />
                                <RadioGroup.ItemText>Exact value</RadioGroup.ItemText>
                            </RadioGroup.Item>
                        </RadioGroup.Root>
                    )}
                />
            </Field.Root>

            {budgetType === "exactValue" &&
                <Field.Root className="field" marginBottom={"1rem"} width={"100%"} invalid={invalidBudget}>
                    <InputGroup startElement={<Icon as={FaDollarSign} className="icon" />}>
                        <Input
                            {...register("budget")}
                            className="input"
                            size="lg"
                            placeholder="Enter budget..."
                            onChange={(e) => {
                                setValue("budget", e.target.value);
                                handleChange({ ...watchall, budget: e.target.value });
                            }}
                        />
                    </InputGroup>
                    <Field.ErrorText>{errors.budget?.message}</Field.ErrorText>
                </Field.Root>
            }

            {budgetType === "Range" &&
                <Field.Root className="" width={"100%"} marginBottom={"1rem"} display={"flex"} flexDirection={"column"} gap={"1rem"} invalid={invalidBudgetRange}>
                    <InputGroup startElement={<Icon as={FaDollarSign} className="icon" />}>
                        <Input
                            {...register("budgetMin")}
                            className="input"
                            ref={minInput}
                            size="lg"
                            placeholder="Min..."
                            onChange={(e) => {
                                setValue("budgetMin", e.target.value);
                                handleChange({ ...watchall, budgetMin: e.target.value });
                            }}
                        />
                    </InputGroup>
                    <InputGroup startElement={<Icon as={FaDollarSign} className="icon" />}>
                        <Input
                            {...register("budgetMax")}
                            className="input"
                            size="lg"
                            ref={maxInput}
                            placeholder="Max..."
                            onChange={(e) => {
                                setValue("budgetMax", e.target.value);
                                handleChange({ ...watchall, budgetMax: e.target.value });
                            }}
                        />
                    </InputGroup>
                    <Field.ErrorText>{errors.budgetRange?.message}</Field.ErrorText>
                </Field.Root>
            }

            <Field.Root className="field" flexDirection={"row"} width={"50%"} marginBottom={"1rem"}>
                <Select.Root
                    {...register("cuisine")}
                    collection={cuisines}
                    size="lg"
                    colorPalette={"green"}
                    marginTop={"1rem"}
                    onValueChange={handleCuisineChange}
                >
                    <Select.HiddenSelect />
                    <Select.Label>Preferred cuisines</Select.Label>
                    <Select.Control className="select">
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select a preferred cuisine..." />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {cuisines.items.map((cuisine) => (
                                    <Select.Item item={cuisine} key={cuisine.value}>
                                        {cuisine.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>
            </Field.Root>

            <Field.Root className="field" width={"50%"}>
                <Field.Label className="label">What matters most to you when choosing a meal?</Field.Label>
                <Slider.Root {...register("deliciousness")} defaultValue={[50]} step={50} size={"lg"} style={{ width: "100%" }} colorPalette={"green"} className="slider">
                    <Slider.Label className="label">Deliciousness</Slider.Label>
                    <Slider.Control >
                        <Slider.Track >
                            <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                        <Slider.Marks marks={[0, 50, 100]} style={{ color: "red" }} />
                    </Slider.Control >
                </Slider.Root>

                <Slider.Root {...register("price")} defaultValue={[50]} step={50} size={"lg"} style={{ width: "100%" }} colorPalette={"green"} className="slider">
                    <Slider.Label className="label">Price: keep it budget-friendly</Slider.Label>
                    <Slider.Control >
                        <Slider.Track >
                            <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                        <Slider.Marks marks={[0, 50, 100]} style={{ color: "red" }} />
                    </Slider.Control >
                </Slider.Root>

                <Slider.Root {...register("calories")} defaultValue={[50]} step={50} size={"lg"} style={{ width: "100%" }} colorPalette={"green"} className="slider">
                    <Slider.Label className="label">Calories</Slider.Label>
                    <Slider.Control >
                        <Slider.Track >
                            <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                        <Slider.Marks marks={[0, 50, 100]} style={{ color: "red" }} />
                    </Slider.Control >
                </Slider.Root>
            </Field.Root>

            <Field.Root className="field" style={{width:"30rem"}} marginTop={"1rem"}>
                <Field.Label className="label">Meal variety: </Field.Label>
                <RadioGroup.Root
                    className="radio-group"
                    colorPalette={"green"}
                    {...register("variety")}
                    onValueChange={(value) => {
                        if (value && value.value) {
                            setValue("variety", value.value.toString());
                            handleChange({ ...watchall, variety: value.value.toString() });
                        }
                    }}
                >
                    <RadioGroup.Item key={1} value={"total"} className="radio-item">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator style={{ border: "1px solid green" }} />
                        <RadioGroup.ItemText>Total variety</RadioGroup.ItemText>
                    </RadioGroup.Item>

                    <RadioGroup.Item key={2} value={"less"} className="radio-item">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator style={{ border: "1px solid green" }} />
                        <RadioGroup.ItemText>Less variety</RadioGroup.ItemText>
                    </RadioGroup.Item>
                </RadioGroup.Root>
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
    budgetType: string;
    budget: string;
    budgetMin: string;
    budgetMax: string;
    deliciousness: string;
    price: string;
    calories: string;
    cuisine: string;
    variety: string;
}

const cuisines = createListCollection({
    items: [
        { label: "The Maghreb", value: "The_Maghreb" },
        { label: "Italian", value: "Italian" },
        { label: "Chinese", value: "Chinese" },
        { label: "Indian", value: "Indian" },
        { label: "Mexican", value: "Mexican" },
        { label: "Middle Eastern", value: "Middle_Eastern" },
    ],
})

const errors = {
    budget: {
        message: "Please enter a valid amount between 3000DA and 20000DA",
    },
    budgetRange: {
        message: "Please enter valid amounts between 3000DA and 20000DA",
    },
    rangeError: {
        message: "Maximum budget must be greater than minimum budget",
    }
}