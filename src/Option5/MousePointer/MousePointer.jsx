import { useCallback, useState } from "react";

const width=900;
const height=900;

const circleRadius =20;
const initialMousePosition={x:width/2,y:height/2}

export const MousePointer=()=>{
    const [mousePosition,setMousePosition]=useState(initialMousePosition)
    
    const handleMouseMove = useCallback( event => {
        const {clientX, clientY} = event;
        setMousePosition({x:clientX,y:clientY})
    },[setMousePosition])

    return <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r={circleRadius}
        />
    </svg>
};