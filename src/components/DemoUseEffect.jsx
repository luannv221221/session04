import React, { useEffect, useState } from 'react'

function DemoUseEffect() {
    const [first, setfirst] = useState("");
    const [count, setCount] = useState(1);
    useEffect(() => {
        // thường sử dụng callAPI
        console.log("Component mouted");
    }, [])

    return (
        <>
            {console.log("render")}
            <div> {count} </div >
            <button onClick={() => setCount(100)}>Tằng 100 </button>
            <input type="text" value={first} onChange={(e) => setfirst(e.target.value)} />
        </>

    )
}

export default DemoUseEffect