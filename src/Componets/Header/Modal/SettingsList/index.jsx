import styled from 'styled-components'
import { Language } from './Language'
import { Coin } from './Currency'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const SettingsContent = () => {
    return (
        <Container>
            <Language />
            <Coin />
        </Container>
    )
}