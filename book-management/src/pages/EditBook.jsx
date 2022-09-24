import { Box, Button, Center, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBooks, UpdateBook } from "../Redux/App/action";
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


const EditBook=()=>{
    const toast = useToast()
    const [currentBook,setCurrentBook]=useState({});
    const books=useSelector(state=>state.AppReducer.books)
    const {id }=useParams();
    const dispatch=useDispatch();
    const[bookName,setBookName]=useState("");
    const [bookAuthor,setBookAuthor]=useState("");
    const[bookCover,setBookCover]=useState("")
    const[category,setCategory]=useState("");
    const[year,setYear]=useState("");
    // const [chapterName,setChapterName]=useState("");
    // const [chapterPages,setChapterPages]=useState(0);
    const navigate=useNavigate();
    useEffect(()=>{

        if(books.length===0){
            dispatch(getBooks());
        }
    },[books.length,dispatch])
    useEffect(()=>{
        if(id){
            const BookById=books.find(book=>book.id=== Number(id));
    //   BookById && setCurrentBook(BookById)
      BookById && setBookName(BookById.book_name)
      BookById && setBookAuthor(BookById.author)
      BookById && setBookCover(BookById.cover_photo);
      BookById && setCategory(BookById.category);
      BookById && setYear(BookById.release_year)
        }
    },[books,id]);
   const updateBookData=()=>{
    const payload={book_name:bookName,
    author:bookAuthor,
    cover_photo:bookCover,
    category:category,
    release_year:year,
   
}
    dispatch(UpdateBook(id,payload)).then(()=>{
        toast({
            title: 'Book Details Updated',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        navigate("/")
    })
   }



    return(<>
    
 <Desktop>
 <Center>
    <Box border="3px solid black" w="50%" mt={5} p={5} borderRadius={10} >
        
        <Heading mt={5} mb={5} textAlign="center" size="lg">Edit Book </Heading>
        <Box>
            <label>Book Name</label>
            <Input  mt={2} mb={2} placeholder="Enter Book Name" type="text" value={bookName} onChange={(e)=>setBookName(e.target.value)} />
            <label>Author Name</label>
            <Input  mt={2} mb={2} placeholder="Enter book Author Name" type="text" value={bookAuthor} onChange={(e)=>setBookAuthor(e.target.value)} />
            <label>Cover Photo</label>
            <Input  mt={2} mb={2} placeholder="Enter book Cover Photo link" type="text" value={bookCover} onChange={(e)=>setBookCover(e.target.value)} />
            <label>Cover Category</label>
            <Input mt={2} mb={2}  placeholder="Enter book Category " type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
            <label>Release Year</label>
            <Input  mt={2} mb={2} placeholder="Enter book release year" type="number" value={year} onChange={(e)=>setYear(e.target.value)} />
          
           <Button w="100%" variant="solid" colorScheme="blue" onClick={updateBookData} >Update</Button>
           </Box>
          
        </Box>
        </Center> 
 </Desktop>
 <Tablet>


 <Center>
    <Box border="3px solid black" w="50%" mt={5} p={5} borderRadius={10} >
        
        <Heading mt={5} mb={5} textAlign="center" size="lg">Edit Book </Heading>
        <Box>
            <label>Book Name</label>
            <Input  mt={2} mb={2} placeholder="Enter Book Name" type="text" value={bookName} onChange={(e)=>setBookName(e.target.value)} />
            <label>Author Name</label>
            <Input  mt={2} mb={2} placeholder="Enter book Author Name" type="text" value={bookAuthor} onChange={(e)=>setBookAuthor(e.target.value)} />
            <label>Cover Photo</label>
            <Input  mt={2} mb={2} placeholder="Enter book Cover Photo link" type="text" value={bookCover} onChange={(e)=>setBookCover(e.target.value)} />
            <label>Cover Category</label>
            <Input mt={2} mb={2}  placeholder="Enter book Category " type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
            <label>Release Year</label>
            <Input  mt={2} mb={2} placeholder="Enter book release year" type="number" value={year} onChange={(e)=>setYear(e.target.value)} />
          
           <Button w="100%" variant="solid" colorScheme="blue" onClick={updateBookData} >Update</Button>
           </Box>
          
        </Box>
        </Center> 
 </Tablet>
 <Mobile>
 <Center>
    <Box border="3px solid black" w="90%" mt={5} p={5} borderRadius={10} >
        
        <Heading mt={5} mb={5} textAlign="center" size="lg">Edit Book </Heading>
        <Box>
            <label>Book Name</label>
            <Input  mt={2} mb={2} placeholder="Enter Book Name" type="text" value={bookName} onChange={(e)=>setBookName(e.target.value)} />
            <label>Author Name</label>
            <Input  mt={2} mb={2} placeholder="Enter book Author Name" type="text" value={bookAuthor} onChange={(e)=>setBookAuthor(e.target.value)} />
            <label>Cover Photo</label>
            <Input  mt={2} mb={2} placeholder="Enter book Cover Photo link" type="text" value={bookCover} onChange={(e)=>setBookCover(e.target.value)} />
            <label>Cover Category</label>
            <Input mt={2} mb={2}  placeholder="Enter book Category " type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
            <label>Release Year</label>
            <Input  mt={2} mb={2} placeholder="Enter book release year" type="number" value={year} onChange={(e)=>setYear(e.target.value)} />
          
           <Button w="100%" variant="solid" colorScheme="blue" onClick={updateBookData} >Update</Button>
           </Box>
          
        </Box>
        </Center> 
 </Mobile>
        </>
    )
}

export default EditBook;