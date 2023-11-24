import { createContext } from "react"

type contextLine = {
    line: boolean
    setLine: React.Dispatch<React.SetStateAction<boolean>>
}

const ContextSharedRef = createContext<contextLine | null> (null);

export default ContextSharedRef