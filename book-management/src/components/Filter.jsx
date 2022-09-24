import { Box, Checkbox, Heading, Input, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
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

function Filter() {
    const[searchParam,setSearchParam]=useSearchParams();
    const initialCateFilter=searchParam.getAll("category")
    const [category,SetCategory]=useState(initialCateFilter || []);
    const initialSortBy=searchParam.getAll("sortBy");
    const [sortBy,setSortBy]=useState(initialSortBy[0] ||"")
    const HandelFilter=(e)=>{
        e.preventDefault();
const newCategory=[...category];
if(newCategory.includes(e.target.value)){
    newCategory.splice(newCategory.indexOf(e.target.value),1)
    }else{
        newCategory.push(e.target.value)
    };
    SetCategory(newCategory)
}

useEffect(()=>{
if(category ||sortBy){
    let params={};
    category && (params.category=category);
    sortBy && (params.sortBy=sortBy);
  
    setSearchParam(params)
}
},[category,setSearchParam,sortBy]);

const HandleSort=(e)=>{
  e.preventDefault();
setSortBy(e.target.value)
}
  return (<>
  <Desktop>
  <Box  border="3px solid brown" m="0px 10px 0 0" p={2}>
      <Box border="3px solid black" borderRadius={5} p={3}>
      <Heading mb={2} size="md">We have this Categories</Heading>
      <Box>
        <Checkbox  isChecked={category.includes("Novel")} onChange={HandelFilter} 
        value="Novel" size="md" colorScheme="green" >
          Novel
        </Checkbox>
      </Box>
      <Box>
        <Checkbox isChecked={category.includes("Motivational")}  onChange={HandelFilter} value="Motivational" size="md" colorScheme="green">
          Motivational
        </Checkbox>
      </Box>
      <Box>
        <Checkbox isChecked={category.includes("Science_Fiction")} onChange={HandelFilter} value="Science_Fiction" size="md" colorScheme="green">
          Science Fiction
        </Checkbox>
      </Box>
      <Box>
        <Checkbox isChecked={category.includes("Thriller")} onChange={HandelFilter} value="Thriller" size="md" colorScheme="green">
          Thriller
        </Checkbox>
      </Box>
      </Box>
     
     
        <Box mt={5} border="3px solid black" borderRadius={5} p={3}>
<Heading mb={2} size="sm">Sort Books</Heading>
<Box>
<RadioGroup defaultValue={sortBy} >
  <Stack onChange={HandleSort} spacing={2} direction='column'>
    <Radio colorScheme='red' value='asc' name="sortBy">
    Ascending
    </Radio>
    <Radio colorScheme='green'  value='desc' name="sortBy">
    Descending
    </Radio>
  </Stack>
</RadioGroup>
</Box>
    </Box>
    </Box>
  </Desktop>
  <Tablet>  <Box  border="3px solid brown" m="0px 10px 0 0" p={2}>
      <Box border="3px solid black" borderRadius={5} p={3}>
      <Text mb={2} fontSize="16px" fontWeight="bold">We have this Categories</Text>
      <Box>
        <Checkbox  isChecked={category.includes("Novel")} onChange={HandelFilter} 
        value="Novel" size="md" colorScheme="green" >
          Novel
        </Checkbox>
      </Box>
      <Box>
        <Checkbox isChecked={category.includes("Motivational")}  onChange={HandelFilter} value="Motivational" size="md" colorScheme="green">
          Motivational
        </Checkbox>
      </Box>
      <Box>
        <Checkbox isChecked={category.includes("Science_Fiction")} onChange={HandelFilter} value="Science_Fiction" size="md" colorScheme="green">
          Science Fiction
        </Checkbox>
      </Box>
      <Box>
        <Checkbox isChecked={category.includes("Thriller")} onChange={HandelFilter} value="Thriller" size="md" colorScheme="green">
          Thriller
        </Checkbox>
      </Box>
      </Box>
     
     
        <Box mt={5} border="3px solid black" borderRadius={5} p={3}>
<Heading mb={2} size="sm">Sort Books</Heading>
<Box>
<RadioGroup defaultValue={sortBy} >
  <Stack onChange={HandleSort} spacing={2} direction='column'>
    <Radio colorScheme='red' value='asc' name="sortBy">
    Ascending
    </Radio>
    <Radio colorScheme='green'  value='desc' name="sortBy">
    Descending
    </Radio>
  </Stack>
</RadioGroup>
</Box>
    </Box>
    </Box></Tablet>
  <Mobile>  <Box  border="3px solid brown" m="0px 10px 0 0" p={2}>
      <Box border="3px solid black" borderRadius={5} p={3}>
      <Heading mb={2} size="md">We have this Categories</Heading>
      <Box>
        <Checkbox  isChecked={category.includes("Novel")} onChange={HandelFilter} 
        value="Novel" size="md" colorScheme="green" >
          Novel
        </Checkbox>
      </Box>
      <Box>
        <Checkbox isChecked={category.includes("Motivational")}  onChange={HandelFilter} value="Motivational" size="md" colorScheme="green">
          Motivational
        </Checkbox>
      </Box>
      <Box>
        <Checkbox isChecked={category.includes("Science_Fiction")} onChange={HandelFilter} value="Science_Fiction" size="md" colorScheme="green">
          Science Fiction
        </Checkbox>
      </Box>
      <Box>
        <Checkbox isChecked={category.includes("Thriller")} onChange={HandelFilter} value="Thriller" size="md" colorScheme="green">
          Thriller
        </Checkbox>
      </Box>
      </Box>
     
     
        <Box mt={5} border="3px solid black" borderRadius={5} p={3}>
<Heading mb={2} size="sm">Sort Books</Heading>
<Box>
<RadioGroup defaultValue={sortBy} >
  <Stack onChange={HandleSort} spacing={2} direction='column'>
    <Radio colorScheme='red' value='asc' name="sortBy">
    Ascending
    </Radio>
    <Radio colorScheme='green'  value='desc' name="sortBy">
    Descending
    </Radio>
  </Stack>
</RadioGroup>
</Box>
    </Box>
    </Box></Mobile>
  
   
   </>
  );
}

export default Filter;
