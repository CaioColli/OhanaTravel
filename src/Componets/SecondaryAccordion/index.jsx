import styled from 'styled-components'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

const Button = styled(AccordionButton)`
    background-color: var(--Yellow);
    border-radius: 10px;
    border: none;
    color: var(--White);
    cursor: pointer;
    display: flex;
    font-size: clamp(1.125rem, 1.3579rem + 0.5351vw, 1.5rem);
    font-weight: 900;
    justify-content: space-between;
    padding: 16px 24px;
`

const ArrowIcon = styled(AccordionIcon)``

export const SecondaryCustomAccordion = ({ children, title }) => {
    return (
        <>
            <Accordion allowToggle>
                <AccordionItem>
                    <Button>
                        {title}
                        <ArrowIcon />
                    </Button>
                    <AccordionPanel>
                        {children}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}