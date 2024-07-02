import React, { useContext } from 'react'
import { creatContext } from '../App2'

function D() {
    const { fullName } = useContext(creatContext);
    return (
        <>
            <div>D {fullName}</div>

        </>
    )
}

export default D