import styled from 'styled-components'
import { Input } from '../Input'
import { SubmitButton } from '../Button'
import { Link } from 'react-router-dom'

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
    return (
        <Container>
            <Content>
                <Title>
                    Faça o login ou crie uma conta
                </Title>

                <Form>
                    <Input label='E-mail' placeholder='Insira seu e-mail' type='email' />
                    <Input label='Senha' placeholder='Insira sua senha' type='password' />
                    <SubmitButton text='Logar' />
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