import { StrictMode } from 'react'
import { createGlobalStyle } from 'styled-components'
import { createRoot } from 'react-dom/client'
import { AllRoutes } from './Routes'
import { CurrencyProvider } from './Context/CurrencyContext'
import { UserProvider } from './Context/UserLogin'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  :root {
    --BlueBg: #003B95;
    --White: #ffffff;
    --Blue: #006CE4;
    --Transparent: rgba(255,255,255, 20%);
    --LightGray: #CCCCCC;
    --Black: #000000;
    --Gray: #727272;
    --Yellow: #FFB74D;
  }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <CurrencyProvider>
      <UserProvider>
        <AllRoutes />
      </UserProvider>
    </CurrencyProvider>
  </StrictMode>,
)
