import styled from 'styled-components'
import { Button } from '../Button'
import { Services } from './ServicesList'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Localization } from './LocalizationList'
import { DiscountMessage } from './DiscountMessage'
import { BurguerMenu } from './BurguerMenu'
import { useDisclosure } from '@chakra-ui/react'
import { HeaderModal } from './Modal'

const Container = styled.header`
    align-items: center;
    background-color: var(--BlueBg);
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 120px;

    @media (max-width: 450px) {
        padding-bottom: 48px;
    }
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

const StyledLink = styled(Link)`
    all: unset;
`

export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const hiddenPaths = ['/login']

    const isHiddenRoute = hiddenPaths.includes(location.pathname)

    return (
        <>
            <Container>
                <Content>
                    <HomeButton onClick={() => navigate('/')}>
                        OhanaTravel
                    </HomeButton>

                    <ContentOptions>
                        <Localization />

                        {!isHiddenRoute && (
                            <>
                                <StyledLink to='login'>
                                    <Button>
                                        Login
                                    </Button>
                                </StyledLink>
                            </>
                        )}

                        <BurguerMenu onClick={onOpen} />
                    </ContentOptions>
                </Content>

                {!isHiddenRoute && (
                    <>
                        <Services />
                        <DiscountMessage />
                    </>
                )}
            </Container>

            <HeaderModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}