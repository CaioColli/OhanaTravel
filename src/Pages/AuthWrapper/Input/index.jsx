import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Label = styled.label`
    font-size: 18px;
`

const StyledInput = styled.input`
    border-radius: 10px;
    font-size: 16px;
    height: 40px;
    min-width: 400px;
    padding: 8px;
    border: 1px solid var(--Gray);

    @media (max-width: 4500px) {
        min-width: 300px;
    }
`

export const Input = ({ label, placeholder, type }) => {
    return (
        <Content>
            <Label>
                {label}
            </Label>
            <StyledInput placeholder={placeholder} type={type}/>
        </Content>
    )
}