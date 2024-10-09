import { IoCloseCircleOutline } from 'react-icons/io5'
import styled from 'styled-components'

const ImagesContent = styled.div`
    align-items: center;
    background-color: var(--White);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    min-height: 150px;
    width: fit-content;
`

const ImagesHeader = styled.header`
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

const Image = styled.img`
    max-width: 150px;
    max-height: 150px;
`

export const RegisteredImages = ({ index, onClick, image, alt }) => {
    return (
        <>
            <ImagesContent key={index}>
                <ImagesHeader onClick={onClick}>
                    <HeaderButton>
                        <HeaderIcon />
                    </HeaderButton>
                </ImagesHeader>

                <Image src={image} alt={alt} />
            </ImagesContent>
        </>
    )
}