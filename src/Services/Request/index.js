import axios from 'axios'

// Criei para esse axios encapsular toda a requisição
// Crio uma instancia 
export const http = axios.create({
    baseURL: 'https://ohana-travel-back-end.vercel.app/',
    headers: {
        Accept: 'application/json', // Dessa forma declaro que a aplicação só aceita Json's
        Content: 'application/json'
    }
})

// Usar o interceptor do axios para autenticas as reservas com base no token do usuario