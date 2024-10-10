import { SecondaryCustomAccordion } from '@/Componets/SecondaryAccordion'
import { Input } from '../../Input/TypeValue'
import styled from 'styled-components'
import { RiSendPlaneLine } from "react-icons/ri"
import { useState } from 'react'
import { InputTypeFile } from '../../Input/TypeFile'
import { RegisteredServices } from '../ServicesContainer'
import { RegisteredImages } from '../ImagesContainer'
import { useAddingServices } from '../Hook/AddingServices'
import { useAddingImages } from '../Hook/AddingImages'

const Form = styled.form`
    background-color: var(--LightGray);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    align-items: center;
`

export const ServicesForm = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

export const SubmitServicesButton = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: var(--Yellow);
    border-radius: 30%;
    width: 40px;
    height: 40px;

    @media (max-width: 1024px) {
        width: 100%;
        border-radius: 10px;
    }
`

export const SubmitIcon = styled(RiSendPlaneLine)`
    font-size: 24px;
    color: var(--White);
`

export const ServicesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`

const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`

export const AddHotel = () => {
    const { serviceInput, setServiceInput, servicesIncluded, submitFormServices, deleteService } = useAddingServices()
    const { images, handleImageChange, deleteImage } = useAddingImages()

    const [hotelName, setHotelName] = useState('')
    const [standardValue, setStandardValue] = useState('')
    const [doubleStandardValue, setDoubleStandardValue] = useState('')
    const [deluxeValue, setDeluxeValue] = useState('')
    
    return (
        <>
            <SecondaryCustomAccordion title='Adicionar hotel'>
                <Form>
                    <Input placeholder='Nome do hotel' type='text' onChange={(e) => setHotelName(e.target.value)} />
                    <Input placeholder='Valor standard' type='number' onChange={(e) => setStandardValue(e.target.value)} />
                    <Input placeholder='Valor duplo standard' type='number' onChange={(e) => setDoubleStandardValue(e.target.value)} />
                    <Input placeholder='Valor deluxe' type='number' onChange={(e) => setDeluxeValue(e.target.value)} />

                    <ServicesForm>
                        <Input
                            placeholder='Serviços inclusos'
                            type='text'
                            value={serviceInput}
                            onChange={(e) => setServiceInput(e.target.value)} />

                        <SubmitServicesButton onClick={submitFormServices}>
                            <SubmitIcon />
                        </SubmitServicesButton>
                    </ServicesForm>

                    <ServicesContainer>
                        {servicesIncluded.map((service, index) => (
                            <RegisteredServices
                                key={index}
                                onClick={(event) => deleteService(event, index)}
                                text={service}
                            />
                        ))}
                    </ServicesContainer>

                    <InputTypeFile onChange={handleImageChange} />

                    <ImagesContainer>
                        {images.map((image, index) => (
                            <RegisteredImages
                                key={index}
                                onClick={(event) => deleteImage(event, index)}
                                image={URL.createObjectURL(image)}
                                alt={`Imagem ${index}`}
                            />
                        ))}
                    </ImagesContainer>
                </Form>
            </SecondaryCustomAccordion>
        </>
    )
}