import styled from 'styled-components'
import { LiaConciergeBellSolid } from "react-icons/lia"
import { useNavigate } from 'react-router-dom'
import { IoCarSportOutline, IoBedOutline } from "react-icons/io5"
import { PiVan } from 'react-icons/pi'

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const Button = styled.button`
    all: unset;
    border-color: var(--Gray);
    border-radius: 10px;
    color: var(--Black);
    cursor: pointer;
    font-size: 24px;
    font-weight: lighter;
    transition: 0.2s ease;
    width: fit-content;

    &:hover {
        border: 2px solid;
        padding: 8px;
    }
`

const Icon = styled.span`
    font-size: 24px;
`

export const Item = styled.li`
    all: unset;
    align-items: center;
    display: flex;
    gap: 16px;
`

export const MenuContent = ({ onClose }) => {
    const navigate = useNavigate()

    const paths = [
        {
            icon: LiaConciergeBellSolid,
            title: 'Reservas',
            path: '/'
        },
        {
            icon: IoBedOutline,
            title: 'Hospedagens',
            path: '/hospedagens'
        },
        {
            icon: PiVan,
            title: 'Turismo',
            path: '/turismo'
        },
        {
            icon: IoCarSportOutline,
            title: 'Aluguel',
            path: '/aluguel'
        },
    ]

    const handleClick = (path) => {
        navigate(path.path)
        onClose()
    }

    return (
        <List>
            {paths.map((path, index) => (
                <Button
                    key={index}
                    onClick={() => handleClick(path)}
                >
                    <Item>
                        <Icon>
                            <path.icon />
                        </Icon>
                        {path.title}
                    </Item>
                </Button>
            ))}
        </List>
    )
}
