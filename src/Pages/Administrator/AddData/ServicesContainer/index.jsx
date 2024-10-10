import { IoCloseCircleOutline } from 'react-icons/io5'
import styled from 'styled-components'

const ServicesContent = styled.div`
    align-items: center;
    background-color: var(--White);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    width: fit-content;
`

const ServicesHeader = styled.header`
    align-items: center;
    background-color: var(--BlueBg);
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: flex-end;
    padding: 4px;
    width: 100%;
`

const HeaderButton = styled.button`
    all: unset;
    cursor: pointer;
    max-height: 24px;
    max-width: 24px;
`

const HeaderIcon = styled(IoCloseCircleOutline)`
    color: var(--White);
    font-size: 24px;
`

const ServiceTitle = styled.p`
    padding: 8px;
`

export const RegisteredServices = ({ onClick, text }) => {
    return (
        <>
            <ServicesContent>
                <ServicesHeader>
                    <HeaderButton onClick={onClick}>
                        <HeaderIcon />
                    </HeaderButton>
                </ServicesHeader>

                <ServiceTitle>
                    {text}
                </ServiceTitle>
            </ServicesContent>
        </>
    )
}