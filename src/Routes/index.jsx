import { CheckAdm } from '@/Componets/CheckAdm'
import { Accommodations } from '@/Pages/Accommodations'
import { Administrator } from '@/Pages/Administrator'
import { Login } from '@/Pages/AuthWrapper/Login'
import { Register } from '@/Pages/AuthWrapper/Register'
import { HomePage } from '@/Pages/HomePage'
import { PagePattern } from '@/Pages/PagePattern'
import { Rent } from '@/Pages/Rent'
import { Tourism } from '@/Pages/Tourism'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PagePattern />}>
                    <Route index element={<HomePage />} />
                    <Route path='hospedagens' element={<Accommodations />} />
                    <Route path='turismo' element={<Tourism />} />
                    <Route path='aluguel' element={<Rent />} />
                    <Route path='login' element={<Login />} />
                    <Route path='registrar' element={<Register />} />

                    <Route
                        path='administrador'
                        element={
                            <CheckAdm>
                                <Administrator />
                            </CheckAdm>
                        } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}