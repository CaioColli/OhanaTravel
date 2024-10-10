import { useState } from 'react'

export function useAddingImages() {
    const [images, setImages] = useState([])

    console.log(images)

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

    return {
        images,
        handleImageChange,
        deleteImage
    }
}