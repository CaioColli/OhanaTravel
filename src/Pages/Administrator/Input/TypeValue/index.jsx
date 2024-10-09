import styled from 'styled-components'

const StyledInput = styled.input`
    all: unset;
    background-color: var(--White);
    border-radius: 10px;
    font-size: 16px;
    max-height: 40px;
    padding: 8px;
    width: 100%;

    @media (max-width: 450px) {
        min-width: 300px;
    }
    
    /* Remover setas do input type number */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

export const Input = ({ placeholder, type, value, onChange }) => {
    return (
        <>
            <StyledInput placeholder={placeholder} type={type} value={value} onChange={onChange} />
        </>
    )
}