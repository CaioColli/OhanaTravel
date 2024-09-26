import { RiMenu2Line } from 'react-icons/ri'
import styled from 'styled-components'

const Icon = styled(RiMenu2Line)`
    color: var(--White);
    cursor: pointer;
    font-size: 32px;

    @media (min-width: 1024px) {
        display: none;
    }
`

export const BurguerMenu = ({ onClick }) => {
    return (
        <Icon 
            onClick={onClick} 
        />
    )
}