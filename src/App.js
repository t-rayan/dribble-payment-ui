import { Box } from '@chakra-ui/react';
import './App.css';
import Left from './Components/Left';
import Right from './Components/Right';

function App() {
  return (
    <Box bg='#f7f7f7' 
    height='100%'
     px={[null,'1rem', '3rem']}
     py='1rem'
     display='grid'
     gridTemplateColumns={{base: '1fr ', md:"1fr", lg:"1fr", xl:"1fr 1fr" , '2xl':'1fr .7fr'}}
     ap={10} >
      <Left />
      <Right />
    </Box>
  );
}

export default App;
