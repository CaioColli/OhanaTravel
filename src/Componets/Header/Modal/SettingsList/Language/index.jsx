import styled from 'styled-components'
import { Item, List } from '../../MenuList'
import { useContext } from 'react'
import { LanguageContext } from '@/Context/LanguageContext'

const Label = styled.label`
    align-items: center;
    border-color: var(--Gray);
    border-radius: 10px;
    color: var(--Gray);
    cursor: pointer;
    display: flex;
    font-size: 18px;
    gap: 16px;    
    transition: 0.2s ease;
    width: fit-content;

    &:has(input:checked) {
        border: 2px solid var(--Gray);
        padding: 8px;
    }
`

const Input = styled.input`
    display: none;
`


const Icon = styled.img`

`

export const Language = () => {
    const { language, setLanguage } = useContext(LanguageContext)

    const languages = [
        {
            image: '/Icons/BrazilIcon.svg',
            title: 'Português (BR)',
            code: 'pt-BR'
        },
        {
            image: '/Icons/UsaIcon.svg',
            title: 'Inglês (USA)',
            code: 'en-US'
        }
    ]

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
    }

    return (
        <List>
            {languages.map((lang, index) => (
                <Item key={index}>
                    <Label>
                        <Input
                            type='radio'
                            name='language'
                            value={lang.code}
                            checked={lang.code === language}
                            onChange={handleLanguageChange}
                        />
                        <Icon src={lang.image} alt={lang.title} />
                        {lang.title}
                    </Label>
                </Item>
            ))}
        </List>
    )
}