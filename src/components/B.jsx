import React, { useContext } from 'react'
import { creatContext } from '../App2'

function B() {
    const { fullName, changeFullName } = useContext(creatContext);

    return (
        <>
            <div>B {fullName}</div>
            <button onClick={changeFullName}>Change Value fullName</button>
        </>
    )
}

export default B