import React from "react";
import {Box,Image,Heading,Text, Button, Center, Flex} from "@chakra-ui/react"
import { Link } from "react-router-dom";
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

const BookCard=({bookData})=>{
    // console.log(bookData.cover_photo)
    const admin=useSelector((state)=>state.AuthReducer.isAdmin)
    return(
        <>
        <Desktop>
        <Box key={bookData.id} w="350px" h="490px" p={2}  border="2px solid black" borderRadius={5}>
            {/* <Center> */}
                <Box p={4}>  
                <Center>
                      <Image w="200px" h="300px" src={bookData.cover_photo} alt="xx" />
                      </Center>
                      <Center>
                      <Box>
                    <Heading mt={5} textAlign='center' size="sm">{bookData.book_name}</Heading>
                    <Text>
                        {bookData.category}
                    </Text>
                    <Text>
                        {bookData.release_year}
                    </Text>
                    <Flex mt={2} justifyContent="space-around">
                    {
                        admin&& <Link to={`/books/${bookData.id}/edit`}> <Button colorScheme="green" w="100px">Edit</Button></Link>
                    }
                   
                   <Link to={`/books/${bookData.id}`}> <Button ml={3} colorScheme="blue" w="100px">See Details</Button></Link>
                   </Flex>
                   </Box>
                   </Center>
                   </Box>

                   {/* </Center> */}
        </Box>
        </Desktop>
        <Tablet>
        <Box key={bookData.id}  h="530px" p={2}  border="2px solid black" borderRadius={5}>
            {/* <Center> */}
                <Box p={4}>  
                <Center>
                      <Image w="200px" h="300px" src={bookData.cover_photo} alt="xx" />
                      </Center>
                      <Center>
                      <Box>
                    <Heading mt={5} textAlign='center' size="sm">{bookData.book_name}</Heading>
                    <Text>
                        {bookData.category}
                    </Text>
                    <Text>
                        {bookData.release_year}
                    </Text>
                    <Flex mt={2} justifyContent="space-around">
                    {
                        admin&& <Link to={`/books/${bookData.id}/edit`}> <Button colorScheme="green" w="80px">Edit</Button></Link>
                    }
                   
                   <Link to={`/books/${bookData.id}`}> <Button ml={3} colorScheme="blue" p={2} w="100px">See Details</Button></Link>
                   </Flex>
                   </Box>
                   </Center>
                   </Box>

                   {/* </Center> */}
        </Box>
        </Tablet>
        <Mobile>
        <Box key={bookData.id}  h="530px" p={2}  border="2px solid black" borderRadius={5}>
            {/* <Center> */}
                <Box p={4}>  
                <Center>
                      <Image w="200px" h="300px" src={bookData.cover_photo} alt="xx" />
                      </Center>
                      <Center>
                      <Box>
                    <Heading mt={5} textAlign='center' size="sm">{bookData.book_name}</Heading>
                    <Text>
                        {bookData.category}
                    </Text>
                    <Text>
                        {bookData.release_year}
                    </Text>
                    <Flex mt={2} justifyContent="space-around">
                    {
                        admin&& <Link to={`/books/${bookData.id}/edit`}> <Button colorScheme="green" w="80px">Edit</Button></Link>
                    }
                   
                   <Link to={`/books/${bookData.id}`}> <Button ml={3} colorScheme="blue" p={2} w="100px">See Details</Button></Link>
                   </Flex>
                   </Box>
                   </Center>
                   </Box>

                   {/* </Center> */}
        </Box>
        </Mobile>
      
        </>
    )
}

export default BookCard;