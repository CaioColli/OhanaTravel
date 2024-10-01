import styled from 'styled-components'
import { FiUser } from 'react-icons/fi'
import { FaGear } from 'react-icons/fa6'
import { BiCoinStack } from 'react-icons/bi'
import { MdLogout } from 'react-icons/md'
import { Menu, MenuButton, MenuItem as ChakraMenuItem, MenuList as ChakraMenuList } from '@chakra-ui/react'
import { LiaConciergeBellSolid } from "react-icons/lia"
import { Link } from 'react-router-dom'
import { UserContext } from '@/Context/UserLogin'
import { useContext, useState } from 'react'
import { LogoutAlert } from './LogoutAlert'

const Container = styled.div`
    position: relative;
`

const MenuContainer = styled(Menu)``

const ProfileButton = styled(MenuButton)`
    all: unset;
    background-color: var(--White);
    border-radius: 50%;
    cursor: pointer;
    height: auto;
    width: auto;
    min-height: 32px;
    min-width: 32px;
    text-align: center;

    &:hover {
        transform: scale(1.05);
    }
`

const IconProfile = styled(FiUser)`
    color: var(--Gray);
    font-size: 20px;
`

const MenuList = styled(ChakraMenuList)`
    background-color: var(--White);
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 25px;
`

const MenuItem = styled(ChakraMenuItem)`
    all: unset;
`

const ItemContent = styled(Link)`
    all: unset;
    align-items: center;
    border-color: var(--Gray);
    border-radius: 10px;
    color: var(--Gray);
    cursor: pointer;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    gap: 8px;
    transition: 0.2s ease;

    &:hover {
        border: 2px solid;
        padding: 8px;
    }
`

const MenuIcon = styled.div`
    align-items: center;
    background-color: var(--Gray);
    border-radius: 50%;
    color: var(--White);
    display: flex;
    font-size: 24px;
    justify-content: center;
    padding: 4px;
`

export const UserProfile = () => {
    const { isAdmin } = useContext(UserContext)
    const [openLogoutAlert, setOpenLogoutAlert] = useState(false)

    const handleClickOpen = () => {
        setOpenLogoutAlert(true)
    }

    return (
        <Container>
            <MenuContainer>
                <ProfileButton>
                    <IconProfile />
                </ProfileButton>
                <MenuList>
                    <MenuItem>
                        <ItemContent>
                            <MenuIcon>
                                <LiaConciergeBellSolid />
                            </MenuIcon>
                            Reservas
                        </ItemContent>
                    </MenuItem>

                    <MenuItem>
                        <ItemContent>
                            <MenuIcon>
                                <FaGear />
                            </MenuIcon>
                            Configuração
                        </ItemContent>
                    </MenuItem>

                    {isAdmin && (
                        <MenuItem>
                            <ItemContent>
                                <MenuIcon>
                                    <BiCoinStack />
                                </MenuIcon>
                                Administrador
                            </ItemContent>
                        </MenuItem>
                    )}

                    <MenuItem>
                        <ItemContent onClick={handleClickOpen}>
                            <MenuIcon>
                                <MdLogout />
                            </MenuIcon>
                            Sair
                        </ItemContent>
                    </MenuItem>
                </MenuList>
            </MenuContainer>

            <LogoutAlert open={openLogoutAlert} setOpen={setOpenLogoutAlert} />

        </Container>
    )
}