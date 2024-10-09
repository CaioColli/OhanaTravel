import { SecondaryCustomAccordion } from '@/Componets/SecondaryAccordion'
import { Input } from '../../Input/TypeValue'
import styled from 'styled-components'
import { RiSendPlaneLine } from "react-icons/ri"
import { useState } from 'react'
import { InputTypeFile } from '../../Input/TypeFile'
import { RegisteredServices } from '../ServicesContainer'
import { RegisteredImages } from '../ImagesContainer'

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
    const [servicesIncluded, setServicesIncluded] = useState([])
    const [serviceInput, setServiceInput] = useState('')
    const [images, setImages] = useState([])

    const submitFormServices = (event) => {
        event.preventDefault()

        if (serviceInput.trim()) {
            setServicesIncluded([...servicesIncluded, serviceInput])
            setServiceInput('')
        }
    }

    const deleteService = (event, index) => {
        event.preventDefault()
        setServicesIncluded(servicesIncluded.filter((_, i) => i !== index))
    }

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files)

        // Verifica se a imagem já existe no estado
        const newImages = files.filter((file) => {
            const exists = images.some((image) => image.name === file.name)

            if (exists) {
                alert('Já existe')
                return false
            }
            return true
        })

        setImages((prevImages) => [...prevImages, ...newImages])
    }

    const deleteImage = (event, index) => {
        event.preventDefault()
        setImages(images.filter((_, i) => i !== index))
    }

    return (
        <>
            <SecondaryCustomAccordion title='Adicionar hotel'>
                <Form>
                    <Input placeholder='Nome do hotel' type='text' />
                    <Input placeholder='Valor standard' type='number' />
                    <Input placeholder='Valor duplo standard' type='number' />
                    <Input placeholder='Valor deluxe' type='number' />

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