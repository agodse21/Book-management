import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBooks } from "../Redux/App/action";


const SingleBook=()=>{
    const [currentBook,setCurrentBook]=useState({});
    const books=useSelector(state=>state.AppReducer.books)
    const {id}=useParams();
    const dispatch=useDispatch()
    console.log(id)
    useEffect(()=>{

        if(books.length===0){
            dispatch(getBooks())
        }
    },[books.length,dispatch])
    useEffect(()=>{
        if(id){
            const BookById=books.find(book=>book.id=== Number(id));
      BookById && setCurrentBook(BookById)
        }
        },[books,id]);
        console.log(currentBook)
    return(
        <Center>
        <Box m={5} border="3px solid black" p={4} borderRadius={5}>
             <Heading textAlign="center" size="lg">Book Informations</Heading>
             <Box mt={3}>
                <Center>
                <Image h="300px" src={currentBook.cover_photo?currentBook.cover_photo:""} alt="cover" />
                </Center>
                <Text mt={5}><b> Book Name:</b> {currentBook.book_name?currentBook.book_name:""}</Text>
                <Text><b> Book Author:</b> {currentBook.author?currentBook.author:""}</Text>
                <Text><b> Book Category:</b> {currentBook.category?currentBook.category:""}</Text>
                <Text><b> Release Year:</b> {currentBook.release_year?currentBook.release_year:""}</Text>
                {/* <Text><b> Book Name:</b> {currentBook.book_name?currentBook.book_name:""}</Text>
                <Text><b> Book Name:</b> {currentBook.book_name?currentBook.book_name:""}</Text>
              */}
               </Box>
        </Box>
        </Center>
       
    )
}

export default SingleBook;