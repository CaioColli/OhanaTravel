import { UserContext } from '@/Context/UserLogin'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

// Esse componente verifica se a pessoa que esta tentando acessar a página de adm é ou não uma pessoa administradora, caso não for ela é jogada a página inicial.
export const CheckAdm = ({children }) => {
    const { isAdmin } = useContext(UserContext)

    // Caso a pessoa não for administradora será jogada a página inicial.
    return isAdmin ? children : <Navigate to='/' />
}