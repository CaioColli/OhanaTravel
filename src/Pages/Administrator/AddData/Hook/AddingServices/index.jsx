import { useState } from 'react'

export function useAddingServices() {
    const [serviceInput, setServiceInput] = useState('')
    const [servicesIncluded, setServicesIncluded] = useState([])

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

    return {
        serviceInput,
        setServiceInput,
        servicesIncluded,
        submitFormServices,
        deleteService
    }
}