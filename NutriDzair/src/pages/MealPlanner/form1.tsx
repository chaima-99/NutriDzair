import "./hero.css"
import {
    Button,
    // ButtonGroup,
    Steps,
    Field,
    Input,
    InputGroup,
    RadioGroup,
    // NumberInput,
} from "@chakra-ui/react"
import { useEffect, useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { Icon } from "@chakra-ui/react"
//******************************************** Icons ******************************************** /
import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { RiWeightLine } from "react-icons/ri";
import { BiRuler } from "react-icons/bi";

interface FormValues {
    Fullname: string;
    email: string;
    weight: string;
    height: string;
    gender: string;
}
const errors = {
    Fullname: {
        message: "First name is required",
    },
    email: {
        message: "Email is required",
    },
    weight: {
        message: "Weight is required",
    },
    height: {
        message: "Height is required",
    },
    gender: {
        message: "gender is required"
    }
}


export default function Form1({ Data }: { Data: Record<string, any> }) {
    const [formFilled, setFormFilled] = useState(false)
    const nextBtn = useRef<HTMLButtonElement>(null)
    const [step, setStep] = useState(0)

    const {
        register,
        handleSubmit,
        watch,
    } = useForm<FormValues>()
    const watchall = watch()
    const onSubmit = (data: FormValues) => {
        console.log(data)
        // Validate the form data before proceeding to the next step
        if (isValidForm(data)) {
            setStep(step + 1) // Manually advance to the next step if form is valid
            nextBtn.current?.click() // Trigger the next button click
            console.log("Form validation succeeded")
            Object.assign(Data, data)

        } else {
            // Set form filled to false if validation fails
            setFormFilled(false)
            console.log("Form validation failed")
        }
    }
    function handleChange(form: FormValues) {
        for (const value of Object.values(form)) {
            if (!value || value.length === 0) {
                setFormFilled(false)
                return
            }
        }
        setFormFilled(true)
    }

    useEffect(() => {
        handleChange(watchall)
    }, [watchall])
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "50%" }}>
            <Field.Root invalid={false} required colorPalette={"green"} className="field" >
                <Field.Label className="label">Full Name</Field.Label>
                <InputGroup startElement={<Icon as={CiUser} className="icon" />}>
                    <Input {...register("Fullname")} className="input" size="lg" />
                </InputGroup>
                <Field.ErrorText>{errors.Fullname?.message}</Field.ErrorText>
                <Field.Label className="label">Email Address</Field.Label>
                <InputGroup startElement={<Icon as={MdOutlineMail} className="icon" />}>
                    <Input {...register("email")} className="input" size="lg" />
                </InputGroup>
                <Field.ErrorText>{errors.Fullname?.message}</Field.ErrorText>
                <Field.Label className="label">Weight</Field.Label>
                <InputGroup startElement={<Icon as={RiWeightLine} className="icon" />}>
                    <Input {...register("weight")} className="input" size="lg" />
                </InputGroup>
                <Field.ErrorText>{errors.Fullname?.message}</Field.ErrorText>
                <Field.Label className="label">height</Field.Label>
                <InputGroup startElement={<Icon as={BiRuler} className="icon" />}>
                    <Input {...register("height")} className="input" size="lg" />
                </InputGroup>
                <Field.ErrorText>{errors.Fullname?.message}</Field.ErrorText>
            </Field.Root>
            <RadioGroup.Root
                className="radio-group"
                colorPalette={"green"}
                onValueChange={(value) => {
                    handleChange({ ...watchall, gender: value });
                }}
            >
                <RadioGroup.Item key={1} value={"male"} className="radio-item">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator style={{ border: "1px solid green" }} />
                    <RadioGroup.ItemText>{"Male"}</RadioGroup.ItemText>
                </RadioGroup.Item>

                <RadioGroup.Item key={2} value={"female"} className="radio-item">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator style={{ border: "1px solid green" }} />
                    <RadioGroup.ItemText>{"Female"}</RadioGroup.ItemText>
                </RadioGroup.Item>
            </RadioGroup.Root>
            <Steps.NextTrigger asChild disabled={!formFilled} className="next-btn">
                <Button variant="outline" size="lg" className="next-btn" ref={nextBtn} style={{ display: "none" }} >
                    trigger
                </Button>
            </Steps.NextTrigger>
            <input type="submit" value="Continue" className="submit-btn" disabled={!formFilled} />
        </form>
    )
}
function isValidInput(inputType: string, value: string) {
    if (!value || value.length === 0) {
        return false
    }
    switch (inputType) {
        case "Fullname":
            return value.length > 0
        case "email":
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(value)
        case "weight":
            return !isNaN(parseFloat(value)) && isFinite(parseFloat(value))
        case "height":
            return !isNaN(parseFloat(value)) && isFinite(parseFloat(value))
        case "gender":
            return value === "male" || value === "female"
        default:
            return false
    }

}
function isValidForm(form: FormValues) {
    for (const [key, value] of Object.entries(form)) {
        if (!isValidInput(key, value)) {
            return false
        }
    }
    return true
}
