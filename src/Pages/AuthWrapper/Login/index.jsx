import styled from 'styled-components'
import { Input } from '../Input'
import { SubmitButton } from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { UserContext } from '@/Context/UserLogin'
import { CircularProgress } from '@chakra-ui/react'

const Container = styled.section`
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 120px 0;
    gap: 48px;

    @media (max-width: 450px) {
        margin: 48px 0;
    }
`

export const Title = styled.h2`
    color: var(--Black);
    font-weight: bold;
    font-size: clamp(20px, 4vw , 32px);
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

const AlternativeOptions = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding-bottom: 8px;
`

const StyledLink = styled(Link)`
    all: unset;
`

export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => !['small', 'blue'].includes(prop)
})`
    all: unset;
    cursor: pointer;
    font-size: ${props => props.small ? '16px' : '18px'};
    color: ${props => props.blue ? 'var(--BlueBg)' : 'var(--Gray)'};
`

export const Login = () => {
    const { setLoggedIn, setUserName, setIsAdmin } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const submitForm = (event) => {
        event.preventDefault()

        setIsLoading(true)

        const user = {
            email,
            password
        }

        // Mudar URL
        axios.post('http://localhost:8000/login', user)
            .then(res => {
                // Guardo o login com seu token temporariamente para que caso usuario recarregar página não fazer logout
                sessionStorage.setItem('token', res.data.idToken) // idToken vem do back
                sessionStorage.setItem('userName', res.data.firstName)
                sessionStorage.setItem('isAdmin', res.data.isAdmin)
                setUserName(res.data.firstName)
                setIsAdmin(res.data.isAdmin)

                setEmail('')
                setPassword('')
                setLoggedIn(true)

                setTimeout(() => {
                    navigate('/')
                    setIsLoading(false)
                }, 1000)
            })
            .catch((error) => {
                setIsLoading(false)

                const errorMessage = error.response?.data || 'Ocorreu um erro inesperado, tente novamente mais tarde'

                Swal.fire({
                    title: "Erro ao fazer o login",
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
                    Faça o login ou crie uma conta
                </Title>

                <Form onSubmit={submitForm}>
                    <Input label='E-mail' placeholder='Insira seu e-mail' type='email' onChange={(e) => setEmail(e.target.value)} />
                    <Input label='Senha' placeholder='Insira sua senha' type='password' onChange={(e) => setPassword(e.target.value)} />
                    <SubmitButton text='Logar' />

                    {isLoading && (
                        <CircularProgress isIndeterminate color='#003B95' />
                    )}
                </Form>

                <AlternativeOptions>
                    <StyledLink to='/registrar'>
                        <Button blue>
                            Criar uma conta
                        </Button>
                    </StyledLink>

                    <Button small>
                        Esqueci minha senha
                    </Button>
                </AlternativeOptions>
            </Content>
        </Container>
    )
}