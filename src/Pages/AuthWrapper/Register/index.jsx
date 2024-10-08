import styled from 'styled-components'
import { Form, Title } from '../Login'
import { SubmitButton } from '../Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { CircularProgress } from '@chakra-ui/react'
import { http } from '@/Services/Request'
import { Input } from '../Input'

const Container = styled.section`
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 48px;
`


export const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const submitForm = (event) => {
        event.preventDefault()

        setIsLoading(true)

        const newUser = {
            firstName,
            lastName,
            email,
            password
        }

        // Mudar URL
        http.post('/registrar', newUser)
            .then(() => {
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')

                Swal.fire({
                    title: "Conta criada com sucesso",
                    timer: 2000,
                    icon: "success",
                    showConfirmButton: false
                })

                setTimeout(() => {
                    navigate('/login')
                }, 2000)
            })
            .catch((error) => {
                setIsLoading(false)

                const errorMessage = error.response?.data || 'Ocorreu um erro inesperado, tente novamente mais tarde'

                Swal.fire({
                    title: "Erro ao cadastrar",
                    text: errorMessage,
                    timer: 2000,
                    icon: "error",
                    showConfirmButton: false
                })
            })
    }

    return (
        <Container>
            <Content>
                <Title>
                    Crie sua conta
                </Title>

                <Form onSubmit={submitForm}>
                    <Input label='Nome' placeholder='Insira seu nome' type='text' onChange={(e) => setFirstName(e.target.value)} />
                    <Input label='Sobrenome' placeholder='Insira seu obrenome' type='text' onChange={(e) => setLastName(e.target.value)} />
                    <Input label='E-mail' placeholder='Insira seu e-mail' type='email' onChange={(e) => setEmail(e.target.value)} />
                    <Input label='Senha' placeholder='Insira seu e-mail' type='password' onChange={(e) => setPassword(e.target.value)} />
                    <SubmitButton text='Confirmar' />
                </Form>

                {isLoading && (
                    <CircularProgress isIndeterminate color='#003B95' />
                )}
            </Content>
        </Container>
    )
}