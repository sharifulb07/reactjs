import React from "react";

export default function Button({ color, bg, fontSize, children }) {
    const styles = {
        backgroundColor: bg,
        color: color,
        fontSize: fontSize+'px',
    }
    return(
        <button style={styles}>
            {children}
            
        </button>

    )
}