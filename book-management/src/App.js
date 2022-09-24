// import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { AllRoutes } from './pages/AllRoutes';

function App() {
 
  return (
    <Box fontFamily="sans-serif" >
      <Navbar />
     <AllRoutes />
    </Box>
  );
}

export default App;
