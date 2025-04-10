
import { Spinner } from "@chakra-ui/react"
//         // If the form is valid, proceed to the next step
export default function Loading() {
    return (
        <div className="loading">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='green.500'
                size='xl'
            />
        </div>
    )
}