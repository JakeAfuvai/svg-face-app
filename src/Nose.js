import React from "react"

const Nose = props => {
    return (
        <ellipse 
            rx={props.width} 
            ry={props.height} 
            cx={props.x} 
            cy={props.y} 
            fill="red"
        />
    )
}

export default Nose