import React from 'react'
import { Input } from '@chakra-ui/react'

const InputNormal = ({datoSolicitado, nombreDato, tipoDato, value, change, blur }) => {
    return(
        <Input name={nombreDato} type={tipoDato} placeholder={datoSolicitado} value={value} onChange={change} onBlur={blur} />
    )
}

export { InputNormal }