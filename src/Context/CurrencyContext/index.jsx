import { createContext, useState } from 'react'

export const CurrencyContext = createContext()

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState('BRL')

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    )
}
