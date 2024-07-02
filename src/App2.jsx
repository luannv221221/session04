import React, { createContext, useState } from 'react'
import A from './components/A'
import B from './components/B'

export const creatContext = createContext();
function App2() {
    const [fullName, setFullName] = useState("Phạm Băng Băng");

    const changeFullName = () => {
        setFullName("Kim Dung")
    }
    return (
        <>
            <creatContext.Provider value={{ fullName, changeFullName }}>
                <A></A>
                <B></B>
            </creatContext.Provider>
        </>
    )
}

export default App2