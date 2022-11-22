import { Box, Center, Heading, Input, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {login, loginAdmin} from "../Redux/Auth/action"

const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch= useDispatch();
    const navigate=useNavigate();
   const location =useLocation();
   const toast = useToast()
   const comingFrom=location.state?.data||"/Book-management";
    const handleLogin=(e)=>{
        e.preventDefault();
        // dispatch(userLo)
        if(email==="eve.holt@reqres.in" && password==="aaaa"){
dispatch(loginAdmin({email,password})).then(r=>{
    toast({
        title: 'Welcome Admin',
        description: "Your sign in as Admin",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
navigate(comingFrom,{replace:true})
})
        }else if(email && password){
            dispatch(login({email,password})).then(r=>{
                toast({
                    title: 'Welcome Book lover',
                    description: "Your sign in as user",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                navigate(comingFrom,{replace:true})
                })
        }
 
    }
    return(
        <Center>
        <Box mt={5}>
            <Center>
            <Heading mb={5}>SignIn</Heading>
            </Center>
            <form  onSubmit={handleLogin}>
                <label>Email</label>
               <Input mt={2} mb={2} type="email"  placeholder="Enter Your email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
               <label>Passwrod</label>
               <Input mt={2} mb={2}  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password" />
               <Input mt={2} mb={2} bg="blue" color="white" fontSize="20px" type="submit" value="login" />

            </form>
        </Box>
        </Center>
    )
}

export default Login;