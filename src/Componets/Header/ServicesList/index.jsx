import styled from 'styled-components'
import { FaBed, FaCar, FaShuttleVan  } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    padding: 16px 0 50px 0;

    @media (max-width: 1024px) {
        display: none;
    }
`

const ServicesList = styled.ul`
    align-items: center;
    display: flex;
    gap: 24px;
`

const Button = styled.button`
    all: unset;
    align-items: center;
    background-color: var(--Transparent);
    border-color: var(--White);
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    transition: 0.5s ease;

    &:hover {
        border: 1px solid var(--White);
    }
`

const Icon = styled.span`
    color: var(--White);
    font-size: 18px;
`

const ServicesItem = styled.li`
    all: unset;
    color: var(--White);
    display: flex;
    font-size: 16px;
    gap: 8px;
    padding: 8px 16px;
`

export const Services = () => {
    const navigate = useNavigate()

    const availableServices = [
        {
            icon: FaBed,
            service: 'Hospedagens',
            path: '/hospedagens'
        },
        {
            icon: FaShuttleVan,
            service: 'Turismo',
            path: '/turismo'
        },
        {
            icon: FaCar,
            service: 'Aluguel',
            path: '/aluguel'
        },
    ]
    
    return (
        <Container>
            <ServicesList>
                {availableServices.map((service, index) => (
                    <Button 
                    key={index}
                    onClick={() => navigate(service.path)}
                    >
                        <ServicesItem>
                            <Icon>
                                <service.icon />
                            </Icon>
                            {service.service}
                        </ServicesItem>
                    </Button>
                ))}
            </ServicesList>
        </Container>
    )
}