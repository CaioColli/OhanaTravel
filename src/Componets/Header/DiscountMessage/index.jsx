import styled from 'styled-components'
import image from '/Images/DiscountIcon.svg'
import { Button } from '@/Componets/Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '@/Context/UserLogin'

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 0 20%;

    @media (max-width: 1024px) {
        padding: 24px 24px 0 24px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    gap: 24px;
`

const Title = styled.h1`
    font-size: 40px;
    color: var(--White);
`

const Paragraph = styled.p`
    color: var(--White);
    font-size: 24px;
`

const Image = styled.img`
    height: 150px;
    width: 150px;

    @media (max-width: 1024px) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    all: unset;
`

export const DiscountMessage = () => {
    const { loggedIn, userName } = useContext(UserContext)

    return (
        <Container>
            <Content>
                {!loggedIn && (
                    <Title>
                        Faça login e economize
                    </Title>
                )}

                {loggedIn && (
                    <Title>
                        {`Olá ${userName}`}
                    </Title>
                )}

                <Paragraph>
                    Economize 10% ou mais em acomodações participantes com o ícone de etiqueta.
                </Paragraph>

                {!loggedIn && (
                    <StyledLink to='login'>
                        <Button>
                            Faça o login
                        </Button>
                    </StyledLink>
                )}
            </Content>

            <Image src={image} />
        </Container>
    )
}