import React from "react"

const Eye = props => {
    return (
        <ellipse 
            cx={props.x}
            cy={props.y}
            rx={props.width}
            ry={props.height}
            fill="red"
        />
    )
}

Eye.defaultProps = {
    width: "25",
    height: "1"
}

export default Eye