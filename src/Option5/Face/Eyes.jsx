export const Eyes = ({eyeOffsetX,eyeOffsetY,eyeRadius}) => (
    <>
        <circle className="eyes"
        cx={- eyeOffsetX}
        cy={- eyeOffsetY}
        r={eyeRadius}
        />
        <circle className="eyes"
            cx={+ eyeOffsetX}
            cy={- eyeOffsetY}
            r={eyeRadius}
        />
    </>
);