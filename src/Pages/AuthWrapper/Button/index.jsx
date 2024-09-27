import styled from 'styled-components'

const Button = styled.button`
    all: unset;
    background-color: var(--BlueBg);
    border-radius: 10px;
    color: var(--White);
    cursor: pointer;
    min-width: 200px;
    padding: 8px;
    text-align: center;

    &:hover {
        transform: scale(1.05);
    }
`

export const SubmitButton = ({ onClick, text }) => {
    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    )
}