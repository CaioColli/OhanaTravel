import { IoCloseCircleOutline } from 'react-icons/io5'
import styled from 'styled-components'

const ImageContainer = styled.div`
    align-items: center;
    background-color: var(--White);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`

const ImageHeader = styled.header`
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

const ImageContent = styled.div`
    max-height: 100px;
`

const HeaderIcon = styled(IoCloseCircleOutline)`
    color: var(--White);
    font-size: 24px;
`

const Image = styled.img`
    border-radius: 0 0 10px 10px;
    max-height: 150px;
    max-width: 150px;
    min-height: 100%;
`

export const RegisteredImages = ({ onClick, image, alt }) => {
    return (
        <>
            <ImageContainer>
                <ImageHeader onClick={onClick}>
                    <HeaderButton>
                        <HeaderIcon />
                    </HeaderButton>
                </ImageHeader>

                <ImageContent>
                    <Image src={image} alt={alt} />
                </ImageContent>
            </ImageContainer>
        </>
    )
}