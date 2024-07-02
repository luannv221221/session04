import React, { useState } from 'react'

function DemoUseState() {

    const [count, setCount] = useState(1);
    const handleCount = (action) => {
        setCount(count + action);
    }
    return (
        <>
            <button onClick={() => handleCount(-1)}>-</button>
            <p>{count}</p>
            <button onClick={() => handleCount(1)}>+</button>
        </>
    )
}

export default DemoUseState