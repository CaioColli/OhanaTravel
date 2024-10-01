import { forwardRef, useContext } from 'react'
import { Dialog as Container, DialogActions as Actions, DialogContent, Slide } from '@mui/material'
import styled from 'styled-components'
import { UserContext } from '@/Context/UserLogin'
import { useNavigate } from 'react-router-dom'

const Title = styled.h2`
    font-size: 32px;
`
const Content = styled(DialogContent)`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Button = styled.button`
    all: unset;
    cursor: pointer;
    background-color: var(--BlueBg);
    border-radius: 10px;
    color: var(--White);
    min-width: 200px;
    padding: 8px 16px;
    text-align: center;
`

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
})

export const LogoutAlert = ({ open, setOpen }) => {   
    const { setLoggedIn } = useContext(UserContext)
    
    const navigate = useNavigate()

    const handleClose = () => {
        setOpen(false)
    }

    const logout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userName')
        sessionStorage.removeItem('isAdmin')
        setLoggedIn(false)
        navigate('/')
    }

    const handleClick = () => {
        handleClose()
        logout()
    }

    return (
        <Container
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <Content>
                <Title>Deseja efeturar o logout?</Title>
                <Actions>
                    <Button onClick={handleClick}>
                        Sim
                    </Button>
                </Actions>
            </Content>
        </Container>
    )
}