import styled from 'styled-components'

const Container = styled.button`
    all: unset;
    background-color: var(--White);
    border-radius: 10px;
    color: var(--Blue);
    cursor: pointer;
    font-weight: bold;
    padding: 8px 16px;
    width: fit-content;

    &:hover {
        transform: scale(1.05);
    }
`

export const Button = ({ children, onClick }) => {
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}