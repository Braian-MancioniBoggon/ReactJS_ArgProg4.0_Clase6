import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

const InputPassword = ({datoSolicitado, nombreDato, value, change, blur }) => {
    const [mostrar,setMostrar] = useState(false);
    const verContraseña = () => setMostrar(!mostrar);
    return(
        <InputGroup>
            <Input type={mostrar ? "text" : "password"} name={nombreDato} placeholder={datoSolicitado} value={value} onChange={change} onBlur={blur} borderColor="#e2e8f0" boxShadow="none" />
            <InputRightElement>
                <IconButton icon={!mostrar ? <FaRegEye /> : <FaRegEyeSlash />} onClick={verContraseña} bg='transparent' _hover={{ bg:'transparent' }} tabIndex='-1'></IconButton>
            </InputRightElement>
        </InputGroup>
    )
}

export { InputPassword }