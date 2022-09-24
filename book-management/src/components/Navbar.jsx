import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "../Redux/Auth/action";
import { USER_LOGIN_FAILURE } from "../Redux/Auth/actionTypes";
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

const Navbar=()=>{
    const auth=useSelector((state)=>state.AuthReducer.isAuth);
    const dispatch= useDispatch();
    const Navigate=useNavigate();
    const LogOutUser=()=>{
dispatch(LogOut());
Navigate("/")
    }

    return(
        <>
        <Desktop>
        <Box bg="blue" color="white" fontWeight="bold">
            <Flex alignItems="center" w="90%" m="auto" p="20px" justifyContent="space-between">
<Link to="/">
   <Box border="1px solid white" p="5px 10px" fontWeight="bold" borderRadius={5} _hover={{bg:"white",color:"black",border:"1px solid black"}}> HOME</Box></Link>
   <Box fontSize="40px">Central Library</Box>
   {
    auth===true?<Box border="1px solid white" p="5px 10px" borderRadius={5} _hover={{bg:"white",color:"black",border:"1px solid black"}} onClick={LogOutUser}>LOG OUT</Box>:<Link to="/login"><Box borderRadius={5} _hover={{bg:"white",color:"black",border:"1px solid black"}} border="1px solid white" p="5px 10px">LOGIN</Box></Link>
   }

</Flex>
        </Box>
        </Desktop>
        <Tablet>
        <Box bg="blue" color="white" fontWeight="bold">
            <Flex alignItems="center" w="90%" m="auto" p="20px" justifyContent="space-between">
<Link to="/">
   <Box border="1px solid white" p="5px 10px" fontWeight="bold" borderRadius={5} _hover={{bg:"white",color:"black",border:"1px solid black"}}> HOME</Box></Link>
   <Box fontSize="40px">Central Library</Box>
   {
    auth===true?<Box border="1px solid white" p="5px 10px" borderRadius={5} _hover={{bg:"white",color:"black",border:"1px solid black"}} onClick={LogOutUser}>LOG OUT</Box>:<Link to="/login"><Box borderRadius={5} _hover={{bg:"white",color:"black",border:"1px solid black"}} border="1px solid white" p="5px 10px">LOGIN</Box></Link>
   }

</Flex>
        </Box>

        </Tablet>
        <Mobile>
        <Box bg="blue" color="white" fontWeight="bold">
            <Flex alignItems="center" w="90%" m="auto" p="20px" justifyContent="space-between">
<Link to="/">
   <Box border="1px solid white" p="3px 5px" fontWeight="bold" borderRadius={5} _hover={{bg:"white",color:"black",border:"1px solid black"}}> HOME</Box></Link>
   <Box fontSize="18px">Central Library</Box>
   {
    auth===true?<Box border="1px solid white" p="3px 5px" borderRadius={5} _hover={{bg:"white",color:"black",border:"1px solid black"}} onClick={LogOutUser}>LOG OUT</Box>:<Link to="/login"><Box borderRadius={5} _hover={{bg:"white",color:"black",border:"1px solid black"}} border="1px solid white" p="3px 5px">LOGIN</Box></Link>
   }

</Flex>
        </Box>
        </Mobile>
       </>
    )
}

export default Navbar;