import { HashLoader } from "react-spinners";

export default function Loading() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: "#f0f0f0",
        }}>
            <HashLoader
                color="#008000"
                size={200}
                loading={true}
            />
            <h2 style={{fontSize:"2rem", color:"#008000", marginTop:"1rem"}}>Preparing your plan ...</h2>
        </div>
    );
}
