import React from 'react'
import { Flex, VStack, Card, CardHeader, CardBody, Button, Heading, Box } from '@chakra-ui/react'
import { Form, useFormik, Formik } from 'formik'
import * as Yup from 'yup'
import { motion } from "framer-motion"
import { CampoFormulario } from '../CampoFormulario/CampoFormulario'
import { PiUserCirclePlus } from "react-icons/pi"

const Formulario = () => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      nombre:"",
      apellido:"",
      email:"",
      telefono:"",
      password:"",
      confirmarPassword:"",
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required('Ingrese un nombre').min(4, 'El minimo es de 4 caracteres'),
      apellido: Yup.string().required('Ingrese un apellido').min(4, 'El minimo es de 4 caracteres'),
      email: Yup.string().email().required('Ingrese un email').min(10, 'El minimo es de 10 caracteres').matches(/^[a-zA-Z0-9][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'No es un email valido'),
      telefono: Yup.number().required('Ingrese un teléfono').min(10, 'El minimo es de 10 caracteres'),
      password: Yup.string().required('Ingrese una contraseña').min(6, 'El minimo es de 6 caracteres').oneOf([Yup.ref("confirmarPassword")], "La contraseña no coincide"),
      confirmarPassword: Yup.string().required('Ingrese una contraseña').min(6, 'El minimo es de 6 caracteres').oneOf([Yup.ref("password")], "La contraseña no coincide"),
    }),
    onSubmit:() => {
      handleChange,
      handleSubmit,
      handleBlur
    }
  })

  return(
    <VStack mt="100px">
      <Flex w="100%" justifyContent="center">
        <Card variant="elevated"  w={{base:"90%", sm:"60%", md:"40%", xl:"30%"}}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Heading size="xl">
                  <PiUserCirclePlus />
                </Heading>
                <Box>
                  <Heading size="lg">Registrarse</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Formik validateOnBlur={false} validateOnChange={false}>
              <Form onSubmit={handleSubmit} autoComplete="off" noValidate>
                <CampoFormulario datoSolicitado={"Nombre"} nombreDato={"nombre"} tipoDato={"text"} error={errors.nombre} value={values.nombre} touched={touched.nombre} change={handleChange} blur={handleBlur} />
                <CampoFormulario datoSolicitado={"Apellido"} nombreDato={"apellido"} tipoDato={"text"} error={errors.apellido} value={values.apellido} touched={touched.apellido} change={handleChange} blur={handleBlur} />
                <CampoFormulario datoSolicitado={"Email"} nombreDato={"email"} tipoDato={"email"} error={errors.email} value={values.email} touched={touched.email} change={handleChange} blur={handleBlur} />
                <CampoFormulario datoSolicitado={"Teléfono"} nombreDato={"telefono"} tipoDato={"number"} error={errors.telefono} value={values.telefono} touched={touched.telefono} change={handleChange} blur={handleBlur} />
                <CampoFormulario datoSolicitado={"Contraseña"} nombreDato={"password"} tipoDato={"password"} error={errors.password} value={values.password} touched={touched.password} change={handleChange} blur={handleBlur} />
                <CampoFormulario datoSolicitado={"Confirmar contraseña"} nombreDato={"confirmarPassword"} tipoDato={"password"} error={errors.confirmarPassword} value={values.confirmarPassword} touched={touched.confirmarPassword} change={handleChange} blur={handleBlur} />
                <Box w="fit-content" h="fit-content">
                  <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}}>
                    <Button mt="4"  bg="#7B5BE7" color="white" _hover={{ bg:"#623BE2" }} type="submit">Enviar</Button>
                  </motion.div>
                </Box>
              </Form>
            </Formik>
          </CardBody>
        </Card>
      </Flex>
    </VStack>
  )
}

export { Formulario }