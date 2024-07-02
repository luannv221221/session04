import React, { useContext } from 'react'
import D from './D'
import { creatContext } from '../App2'

function A() {
    const { fullName } = useContext(creatContext)
    return (
        <>
            <div className="bg-danger text-white">
                <div>A {fullName}</div>
                <D />
            </div>

        </>
    )
}

export default A