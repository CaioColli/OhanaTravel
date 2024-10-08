import styled from 'styled-components'

const StyledInput = styled.input`
    border-radius: 10px;
    font-size: 16px;
    height: 40px;
    padding: 8px;
    width: 100%;

    @media (max-width: 4500px) {
        min-width: 300px;
    }
`

export const Input = ({ placeholder, type, onChange }) => {
    return (
        <>
            <StyledInput placeholder={placeholder} type={type} onChange={onChange} />
        </>
    )
}