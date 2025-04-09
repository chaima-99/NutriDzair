import "./hero.css"
import { Button, ButtonGroup, Steps } from "@chakra-ui/react"
import { useState } from "react"
function Hero() {
    const [step, setStep] = useState(0)
    return (
        <div className="hero">

            <Steps.Root
                step={step}
                onStepChange={(e) => setStep(e.step)}
                count={steps.length}
                
            >

                <Steps.List>
                    {steps.map((step, index) => (
                        <Steps.Item key={index} index={index} title={step.title} >
                            <Steps.Indicator />
                            <Steps.Title >{step.title}</Steps.Title>
                            <Steps.Separator />
                        </Steps.Item>
                    ))}
                </Steps.List>


            <div className="form">
                <h1>User Profile</h1>
            </div>

                    
                <ButtonGroup size="sm" variant="outline">
                    <Steps.PrevTrigger asChild>
                        <Button>Prev</Button>
                    </Steps.PrevTrigger>
                    <Steps.NextTrigger asChild>
                        <Button>Next</Button>
                    </Steps.NextTrigger>
                </ButtonGroup>
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