import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    // Crio um getItem para saber se tem um token 
    const token = sessionStorage.getItem('token')
    // Se o token for diferente de nulo, no caso vazio significa que usuario nao esta logado
    const [loggedIn, setLoggedIn] = useState(token != null)
    // Estou guardando o nome do usuário
    const [userName, setUserName] = useState(sessionStorage.getItem('userName') || '')

    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn, userName, setUserName}}>
            {children}
        </UserContext.Provider>
    )
}