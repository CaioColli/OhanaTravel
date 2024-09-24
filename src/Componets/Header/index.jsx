import styled from 'styled-components'
import { Button } from '../Button'
import { Services } from './ServicesList'
import { useNavigate } from 'react-router-dom'
import { Localization } from './LocalizationList'
import { DiscountMessage } from './DiscountMessage'

const Container = styled.header`
    align-items: center;
    background-color: var(--BlueBg);
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 120px;
`
const Content = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    padding-top: 24px;
    width: 100%;
`

const HomeButton = styled.button`
    all: unset;
    color: var(--White);
    cursor: pointer;
    font-size: 24px;
    font-weight: 800;
`

const ContentOptions = styled.div`
    display: flex;
    gap: 24px;
`

export const Header = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <Content>
                <HomeButton onClick={() => navigate('/')}>
                    OhanaTravel
                </HomeButton>

                <ContentOptions>
                    <Localization />

                    <Button>
                        Login
                    </Button>
                </ContentOptions>
            </Content>

            <Services />

            <DiscountMessage />
        </Container>
    )
}