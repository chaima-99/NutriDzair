import "./hero.css"
import Form1 from "./form1"
import Form2 from "./form2"
import Form3 from "./form3"
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
import { useEffect, useState, useRef} from "react"
import { Icon } from "@chakra-ui/react"
//******************************************** Icons ******************************************** /
import { GoArrowLeft } from "react-icons/go";

function Hero() {
    
    //*************************  references declaration  *************************
    const title = useRef<HTMLHeadingElement>(null)
    const [step, setStep] = useState(3)
    //updating the title of the form based on the step
    useEffect(() => {
        switch (step) {
            case 0:
                title.current!.innerText = "User Profile"
                break
            case 1:
                title.current!.innerText = "Nutrition Goals"
                break
            case 2:
                title.current!.innerText = "Plan Customization"
                break
            case 3:
                //go to the loading page
            default:
                title.current!.innerText = "User Profile"
        }
    }, [step])

    const Data = {}; // create the data object
    return (
        <div className="hero">

            <Steps.Root className="steps"
                step={step}
                onStepChange={(e) => setStep(e.step)}
                count={steps.length}
                colorPalette={"green"}
                defaultStep={0}
            >
                <div className="navigation">
                    <Steps.PrevTrigger asChild className="prev-btn">
                        <Button variant="outline" size="lg" className="prev-btn">
                            <Icon as={GoArrowLeft} className="prev-icon" size={"lg"} />
                        </Button>
                    </Steps.PrevTrigger>

                    <Steps.List className="steps-list">
                        {steps.map((step, index) => (
                            <Steps.Item key={index} index={index} title={step.title} >
                                <Steps.Indicator />
                                <Steps.Title >{step.title}</Steps.Title>
                                <Steps.Separator />
                            </Steps.Item>
                        ))}
                    </Steps.List>
                </div>


                <div className="form">
                    <h1 ref={title} style={{fontSize:"4rem"}}>User Profile</h1>

                    {/* The Form */}
                    {step === 0 &&
                        <Form1 Data = {Data} ></Form1>
                    }
                    {step === 1 &&
                        <Form2 Data = {Data}></Form2>
                    }
                    {
                        step === 2 &&
                        <Form3 Data = {Data}></Form3>
                    }

                </div>
            </Steps.Root>
        </div>
    )
}
const steps = [
    {
        title: "",
    },
    {
        title: "",
    },
    {
        title: "",
    },
]

export default Hero
