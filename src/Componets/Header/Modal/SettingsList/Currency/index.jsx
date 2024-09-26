import styled from 'styled-components'
import { Item, List } from '../../MenuList'
import { CurrencyContext } from '@/Context/CurrencyContext'
import { useContext } from 'react'

const Label = styled.label`
    align-items: center;
    border-color: var(--Gray);
    border-radius: 10px;
    color: var(--Black);
    cursor: pointer;
    display: flex;
    font-size: 18px;
    gap: 16px;    
    transition: 0.2s ease;
    width: fit-content;

    &:has(input:checked) {
        border: 2px solid var(--Gray);
        padding: 8px;
    }
`

const Input = styled.input`
    display: none;
`

const Description = styled.span`
    color: var(--Gray);
`

export const Coin = () => {
    const { currency, setCurrency} = useContext(CurrencyContext)

    const coins = [
        {
            title: 'BRL',
            description: 'Real'
        },
        {
            title: 'USD',
            description: 'Dólar'
        }
    ]

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value)
    }

    return (
        <List>
            {coins.map((coin, index) => (
                <Item key={index}>
                    <Label>
                        <Input
                            type='radio'
                            name='coin'
                            value={coin.title}
                            checked={coin.title === currency}
                            onChange={handleCurrencyChange}
                        />
                        {coin.title}
                        <Description>
                            {coin.description}
                        </Description>
                    </Label>
                </Item>
            ))}
        </List>
    )
}