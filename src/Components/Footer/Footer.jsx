import { Divider, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
const Footer = () => {
    return(
        <VStack bg="#475778" h="auto" w="100%" color="#F4F4F4" mt="50px">
            <Flex bg="#303B52" h="5px" w="100%"></Flex>
            <Flex h="auto" w="100%" direction={{base:"column",sm:"column", md:"row"}} pl={{sm:"5%", md:"0"}} paddingBlock="10px" justifyContent={{sm:"flex-start", md:"space-around"}} alignItems="center">
                <Text fontSize='md'>Mancioni Boggon, Braian Alan</Text>
            </Flex>
            <Divider/>
            <Flex w="100%" alignItems="center" justifyContent="center" pb="10px">
                <Text fontSize='11px'>Copyrigth - All rigths reserved © 2024</Text>
            </Flex>
        </VStack>
    )
}

export { Footer }