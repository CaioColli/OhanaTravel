import styled from 'styled-components'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

const AccordionContainer = styled(Accordion)`
    width: 100%;
`

const AccordionContent = styled(AccordionItem)``

const Header = styled(AccordionButton)`
    background-color: var(--BlueBg);
    border-radius: 10px;
    border: none;
    color: var(--White);
    cursor: pointer;
    display: flex;
    font-size: clamp(1.5rem, 1.3579rem + 0.5351vw, 2rem);
    font-weight: 900;
    justify-content: space-between;
    padding: 16px 24px;
`

const ArrowIcon = styled(AccordionIcon)``

export const PrimaryCustomAccordion = ({ children, title }) => {
    return (
        <>
            <AccordionContainer allowToggle>
                <AccordionContent>
                    <Header>
                        {title}
                        <ArrowIcon />
                    </Header>
                    <AccordionPanel>
                        {children}
                    </AccordionPanel>
                </AccordionContent>
            </AccordionContainer>
        </>
    )
}