import { Box } from '@chakra-ui/react'
import React from 'react'

const CCard = ({bcolor,jc,children}) => {
  return (
    <Box cursor='pointer' _hover={{shadow: 'lg' }} w={['100%','100%','18rem']} h={['12rem','12rem','9rem', '9rem']}  bg={bcolor}  p={5} borderRadius='lg' shadow='md' display='flex' alignItems='flex-end' flexDir='column' justifyContent={jc} >
       {children}
    </Box>
  )
}

export default CCard