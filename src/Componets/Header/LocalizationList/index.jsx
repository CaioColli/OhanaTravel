import styled from "styled-components"
import brazilIcon from '/Icons/IconeBrasil.svg'

const List = styled.ul`
    align-items: center;
    display: flex;
    gap: 32px;

    @media (max-width: 1024px) {
        display: none;
    }
`

const Item = styled.li`
     all: unset;
`

const CoinButton = styled.button`
    all: unset;
    color: var(--White);
    cursor: pointer;
`

const LanguageButton = styled.button`
    all: unset;
    background-image: url(${brazilIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    height: 24px;
    width: 24px;
`

export const Localization = () => {
    return (
        <List>
            <Item>
                <CoinButton>
                    BRL
                </CoinButton>
            </Item>
            <Item>
                <LanguageButton />
            </Item>
        </List>
    )
}