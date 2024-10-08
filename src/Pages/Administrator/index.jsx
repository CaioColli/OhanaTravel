import { PrimaryCustomAccordion } from '@/Componets/PrimaryAccordion'
import styled from 'styled-components'
import { AddHotel } from './AddData/AddHotel'

const Container = styled.section`
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    padding: 48px 0 120px 0;
    width: 70%;
`

const AccordionContent = styled.div``

export const Administrator = () => {
    return (
        <Container>
            <Content>
                <PrimaryCustomAccordion title='Adicionar'>
                    <AccordionContent>
                        <AddHotel />
                    </AccordionContent>
                </PrimaryCustomAccordion>
            </Content>
        </Container>
    )
}