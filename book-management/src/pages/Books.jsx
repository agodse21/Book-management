import React from "react";
import BookList from "../components/BookList";
import Filter from "../components/Filter";
import styled from "styled-components";
import { Box, Heading, Flex, Spacer,SimpleGrid, Center, Table, Text, Popover, PopoverTrigger, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Books = () => {
  const auth=useSelector((state)=>state.AuthReducer.isAdmin)
  console.log("Admin",auth)
  return (
    <>
    <Desktop>
    <Box w="97%" m="auto" p={5}  mt={3} border="4px solid black">
      <Center>      <Heading  mb={5} size="sm"> "Pick your favorite Book And check thier Information"
</Heading></Center>

      <Box >
        <Flex>
          <Box w="400px" >
            <Filter />
          </Box>

          <Spacer />
          
          <Box w="100%" >
          <SimpleGrid columns={3} spacing='40px'>
            <BookList />
           
            </SimpleGrid>
          </Box>
          
        </Flex>
      </Box>
    </Box>
    </Desktop>
    
    <Tablet>
    <Box w="97%" m="10px" p={5}  mt={3} border="4px solid black">
      <Center>      <Heading  mb={5} size="sm"> "Pick your favorite Book And check thier Information"
</Heading></Center>

      <Box >
        <Flex>
          <Box w="400px" >
            <Filter />
          </Box>

          <Spacer />
          
          <Box w="100%" >
          <SimpleGrid columns={2} spacing='30px'>
            <BookList />
           
            </SimpleGrid>
          </Box>
          
        </Flex>
      </Box>
    </Box>
    </Tablet>
    <Mobile>
    <Box w="95%" m="5px" p={5}  mt={3} border="4px solid black">
      <Center>      <Text  mb={5} fontSize="15px"> "Pick your favorite Book And check thier Information"
</Text></Center>

<Popover>
  <PopoverTrigger>
    <Button colorScheme="blue" mb={5} >Filter</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>Filter</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
      <Box w="300px" >
            <Filter />
          </Box>
      </PopoverBody>
      {/* <PopoverFooter>This is the footer</PopoverFooter> */}
    </PopoverContent>
  </Portal>
</Popover>
      <Box >
        <Flex>

         

          <Spacer />
          
          <Box w="100%" >
          <SimpleGrid columns={1} spacing='20px'>
            <BookList />
           
            </SimpleGrid>
          </Box>
          
        </Flex>
      </Box>
    </Box>
    </Mobile>
     </>
  );
};

export default Books;