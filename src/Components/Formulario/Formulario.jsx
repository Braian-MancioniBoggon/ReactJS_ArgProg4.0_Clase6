import React from 'react'
import { Flex, VStack, Card, CardHeader, CardBody, Button, Heading, Box, useToast  } from '@chakra-ui/react'
import { Form, useFormik, Formik } from 'formik'
import * as Yup from 'yup'
import { motion } from "framer-motion"
import { CampoFormulario } from '../CampoFormulario/CampoFormulario'
import { PiUserCirclePlus } from "react-icons/pi"

const Formulario = () => {
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      nombre:"",
      apellido:"",
      email:"",
      telefono:"",
      password:"",
      confirmarPassword:"",
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required('Ingrese un nombre').min(4, 'El minimo es de 4 caracteres').matches(/^[a-zA-Z]/,'Ingrese solo letras'),
      apellido: Yup.string().required('Ingrese un apellido').min(4, 'El minimo es de 4 caracteres').matches(/^[a-zA-Z]/,'Ingrese solo letras'),
      email: Yup.string().email('No es un email valido').required('Ingrese un email').min(10, 'El minimo es de 10 caracteres').matches(/^[a-zA-Z0-9][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'No es un email valido'),
      telefono: Yup.number().required('Ingrese un teléfono'),
      password: Yup.string().required('Ingrese una contraseña').min(6, 'El minimo es de 6 caracteres').oneOf([Yup.ref("confirmarPassword")], "La contraseña no coincide"),
      confirmarPassword: Yup.string().required('Ingrese una contraseña').min(6, 'El minimo es de 6 caracteres').oneOf([Yup.ref("password")], "La contraseña no coincide"),
    }),
    onSubmit:(values) => {
      mostrarMensaje()
    },
  })

  const mostrarMensaje = () => {
    const aviso = new Promise((resolve) => {
      setTimeout(() => resolve(200), 6000)
    })
    toast.promise(aviso, {
      success: { title: `Cuenta de ${formik.values.nombre} ${formik.values.apellido} creada exitosamente`, description: `Se envio un mail a ${formik.values.email} con los datos de acceso` },
      loading: { title: 'Creando cuenta', description: 'Un momento porfavor' },
    })
  }

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
              <Form onSubmit={formik.handleSubmit} autoComplete="off" noValidate>
                <CampoFormulario datoSolicitado={"Nombre"} nombreDato={"nombre"} tipoDato={"text"} error={formik.errors.nombre} value={formik.values.nombre} touched={formik.touched.nombre} change={formik.handleChange} blur={formik.handleBlur} />
                <CampoFormulario datoSolicitado={"Apellido"} nombreDato={"apellido"} tipoDato={"text"} error={formik.errors.apellido} value={formik.values.apellido} touched={formik.touched.apellido} change={formik.handleChange} blur={formik.handleBlur} />
                <CampoFormulario datoSolicitado={"Email"} nombreDato={"email"} tipoDato={"email"} error={formik.errors.email} value={formik.values.email} touched={formik.touched.email} change={formik.handleChange} blur={formik.handleBlur} />
                <CampoFormulario datoSolicitado={"Teléfono"} nombreDato={"telefono"} tipoDato={"number"} error={formik.errors.telefono} value={formik.values.telefono} touched={formik.touched.telefono} change={formik.handleChange} blur={formik.handleBlur} />
                <CampoFormulario datoSolicitado={"Contraseña"} nombreDato={"password"} tipoDato={"password"} error={formik.errors.password} value={formik.values.password} touched={formik.touched.password} change={formik.handleChange} blur={formik.handleBlur} />
                <CampoFormulario datoSolicitado={"Confirmar contraseña"} nombreDato={"confirmarPassword"} tipoDato={"password"} error={formik.errors.confirmarPassword} value={formik.values.confirmarPassword} touched={formik.touched.confirmarPassword} change={formik.handleChange} blur={formik.handleBlur} />
                <Box w="fit-content" h="fit-content">
                  <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}}>
                    <Button mt="4"  bg="#7B5BE7" color="white" _hover={{ bg:"#623BE2" }} type="submit">Enviar</Button>
                  </motion.div>
                </Box>
              </Form>
            </Formik>
          </CardBody>
          <Button type='submit' onClick={formik.handleReset}>Borrar Formulario</Button>
        </Card>
      </Flex>
    </VStack>
  )
}

export { Formulario }