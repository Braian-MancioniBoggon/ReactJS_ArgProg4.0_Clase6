import { Box, Flex, Heading, IconButton, Image, VStack, useColorMode, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa'
import React from 'react';
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const esOscuro = colorMode === "dark";
    return(
        <VStack>
            <Box w="100%" position="fixed" zIndex="99">
                <Flex w="100%" alignItems="Center" justifyContent="space-between" bg="#623BE2" color="white" h="60px"   p="5">
                    <Flex>
                        <Heading  size="md" fontWeight="semibold" color="cyan.400" display="flex" alignItems="center"   alignContent="center">
                            <Box><Image src='img/logo.png' alt='Nueva cuenta' w="100%" maxH="40px" /></Box>
                        </Heading>
                    </Flex>
                    <Flex>
                        <IconButton  ml="4" isRound='true' icon={esOscuro ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} color="white" bg="#7B5BE7" _hover={{ bg:"#7B5BE7" }}></IconButton>
                    </Flex>
                </Flex>
            </Box>
        </VStack>
    )
}

export { Header }