import { useNavigate } from 'react-router-dom'
import { Button, Item, List } from '../MenuList'
import { BiCoinStack } from 'react-icons/bi'
import styled from 'styled-components'

const Icon = styled(BiCoinStack)`
    font-size: 24px;
`

export const AdministratorContent = ({ onClose }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
        onClose()
    }

    return (
        <List>
            <Button onClick={handleClick}>
                <Item>
                    <Icon />
                    Gerenciador
                </Item>
            </Button>
        </List>
    )
}