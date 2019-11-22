import React from "react"

const Mouth = props => {
    return (
        <ellipse 
            cx="200"
            cy="300"
            rx={props.width}
            ry={props.height}
            fill="red"
        />
    )
}

Mouth.defaultProps = {
    width: "50",
    height: "1"
}

export default Mouth