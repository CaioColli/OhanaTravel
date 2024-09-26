import { Modal, ModalContent } from '@chakra-ui/react'
import { IoIosClose } from "react-icons/io"
import styled from 'styled-components'
import { MenuContent } from './MenuList'
import { SettingsContent } from './SettingsList'
import { AdministratorContent } from './Support'

const ModalHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

const CloseIcon = styled(IoIosClose)`
    cursor: pointer;
    font-size: 56px;
    margin: 24px;
`

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 24px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Title = styled.h2`
    font-size: 32px;
`


export const HeaderModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset='slideInBottom'
            size='full'
        >
            <ModalContent
                w='100%'
                h='100vh'
                bg='#ffffff'
            >
                <ModalHeader>
                    <CloseIcon onClick={onClose} />
                </ModalHeader>
                <ModalBody>

                    <Content>
                        <Title>
                            Menu
                        </Title>
                        <MenuContent onClose={onClose} />
                    </Content>

                    <Content>
                        <Title>
                            Configurações
                        </Title>
                        <SettingsContent />
                    </Content>

                    <Content>
                        <Title>
                            Área do administrador
                        </Title>
                        <AdministratorContent onClose={onClose} />
                    </Content>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}