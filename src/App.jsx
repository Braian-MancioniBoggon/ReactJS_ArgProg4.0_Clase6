import React from 'react'
import { ChakraProvider, Flex  } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Formulario } from './Components/Formulario/Formulario'
import { Footer } from './Components/Footer/Footer'

function App() {

  return (
    <ChakraProvider>
      <Header/>
      <Formulario/>
      <Footer/>
    </ChakraProvider>
  )
}

export default App
