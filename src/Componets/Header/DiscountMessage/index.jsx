import styled from 'styled-components'
import image from '/Images/DiscountIcon.png'
import { Button } from '@/Componets/Button'

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
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
    //font-size: clamp(2rem, 3vw + 1rem, 5rem);
`

const Paragraph = styled.p`
    color: var(--White);
    font-size: 24px;
`

const Image = styled.div`
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 200px;
    width: 150px;
`


export const DiscountMessage = () => {
    return (
        <Container>
            <Content>
                <Title>
                    Faça login e economize
                </Title>
                <Paragraph>
                    Economize 10% ou mais em acomodações participantes com o ícone de etiqueta
                </Paragraph>
                <Button>
                    Faça o login
                </Button>
            </Content>

            <Image />
        </Container>
    )
}