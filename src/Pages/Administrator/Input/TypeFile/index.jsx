import { useRef } from 'react'
import styled from 'styled-components'
import { IoCloudUploadOutline } from 'react-icons/io5'

const DropZone = styled.div`
    align-items: center;
    background-color: var(--White);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    min-height: 200px;
    width: 600px;

    @media (max-width: 425px) {
        max-width: 300px;
    }
`

const StyledInput = styled.input`
    display: none;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const DropZoneMessage = styled.div`
    align-items: center;
    color: var(--Gray);
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Icon = styled(IoCloudUploadOutline)`
    font-size: 56px;
`

const Title = styled.p`
    font-size: 18px;
`

const Span = styled.span`
    font-size: 12px;
`

const CustomButton = styled.button`
    all: unset;
    align-items: center;
    background-color: var(--LightGray);
    border-radius: 10px;
    color: var(--White);
    cursor: pointer;
    display: flex;
    font-weight: 900;
    justify-content: center;
    padding: 8px 16px;
`

export const InputTypeFile = ({ onChange }) => {
    const fileInputRef = useRef(null)

    const handleDrop = (event) => {
        event.preventDefault()
        const files = event.dataTransfer.files

        if(files.length > 0) {
            onChange({ target: { files } })
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    const handleFileInputChange = (event) => {
        const files = event.target.files

        if (files.length > 0) {
            onChange({ target: { files } })
        }
    }

    const handleButtonClick = (event) => {
        event.preventDefault()

        fileInputRef.current.click()
    }

    return (
        <DropZone
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <StyledInput
                type='file'
                accept='.png, .jpg, .jpeg'
                onChange={handleFileInputChange}
                ref={fileInputRef}
            />

            <Content>
                <DropZoneMessage>
                    <Icon />

                    <Title>
                        Solte aqui uma imagem
                    </Title>

                    <Span>
                        Ou
                    </Span>
                </DropZoneMessage>

                <CustomButton onClick={handleButtonClick}>
                    Procurar imagem
                </CustomButton>
            </Content>
        </DropZone>
    )
}