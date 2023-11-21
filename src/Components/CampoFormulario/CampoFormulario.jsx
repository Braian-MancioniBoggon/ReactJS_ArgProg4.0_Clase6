import React from 'react'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { InputPassword } from '../InputPassword/InputPassword'
import { InputNormal } from '../InputNormal/InputNormal'

const CampoFormulario = ({datoSolicitado, nombreDato, tipoDato, error, value, touched, change }) => {
    let esPassword = {tipoDato}
    return(
            <FormControl isRequired isInvalid={{error} && {touched}} mb={6}>
                <FormLabel>{datoSolicitado}</FormLabel>
                {esPassword.tipoDato == "password" ? <InputPassword datoSolicitado={datoSolicitado} nombreDato={nombreDato} value={value} change={change}/> : <InputNormal datoSolicitado={datoSolicitado} nombreDato={nombreDato} tipoDato={tipoDato} value={value} change={change}/>}
            <FormErrorMessage mt={0} position='absolute'>
                {error}
            </FormErrorMessage>
        </FormControl>
    )
}

export { CampoFormulario }