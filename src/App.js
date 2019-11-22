import React, { useState} from "react"
import Eye from "./Eye"
import Mouth from "./Mouth"

const App = () => {
    const [mouthWidth, setMouthWidth] = useState(50)
    const [mouthHeight, setMouthHeight] = useState(1)
    const [eyeWidth, setEyeWidth] = useState(25)
    const [eyeHeight, setEyeHeight] = useState(25)
    return (
        <>
            <svg height="80vh" width="70vw" style={{background: "yellow"}}>
                <Eye width={eyeWidth} height={eyeHeight} x={100} y={100}/>
                <Eye width={eyeWidth} height={eyeHeight} x={300} y={100}/>
                <Mouth width={mouthWidth} height={mouthHeight}/>
            </svg>
            <input 
                type="range"
                min={1}
                max={100}
                value={mouthWidth}
                onChange={e=>setMouthWidth(e.target.value)}
            /> Mouth Width
            <input 
                type="range"
                min={1}
                max={100}
                value={mouthHeight}
                onChange={e=>setMouthHeight(e.target.value)}
            /> Mouth Height
            <input 
                type="range"
                min={1}
                max={100}
                value={eyeWidth}
                onChange={e=>setEyeWidth(e.target.value)}
            /> Eyes Width
            <input 
                type="range"
                min={1}
                max={100}
                value={eyeHeight}
                onChange={e=>setEyeHeight(e.target.value)}
            /> Eyes Height
            <button onClick={()=>{setTimeout(()=>setEyeHeight(1),1000);setTimeout(()=>setEyeHeight(25),1000);console.log("fired")}}>Blink</button>
        </>
    )
}

export default App