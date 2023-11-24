import { useState } from "react"
import ContextSharedRef from "./ContextSharedRef"

interface providerProp {
    children: JSX.Element | JSX.Element[]
}

function ProviderSharedRef ({children}: providerProp) {

    const [line, setLine] = useState(false)

    return(
        <ContextSharedRef.Provider value={{line, setLine}}>
            {children}
        </ContextSharedRef.Provider>
    )
}

export default ProviderSharedRef