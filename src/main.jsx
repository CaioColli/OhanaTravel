import { StrictMode } from 'react'
import { createGlobalStyle } from 'styled-components'
import { createRoot } from 'react-dom/client'

const globalStyle = createGlobalStyle`

`

createRoot(document.getElementById('root')).render(
  <StrictMode>

  </StrictMode>,
)
