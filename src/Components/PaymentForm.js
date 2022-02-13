import { CheckIcon, PhoneIcon, ViewIcon } from "@chakra-ui/icons";
import {
    Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import {FaCcMastercard} from 'react-icons/fa'

const PaymentForm = () => {
  return (
    <Stack spacing={10}>
      <FormControl>
        <FormLabel htmlFor="card" color="gray.500">
          Credit card
        </FormLabel>

        <InputGroup  >
          <Input type="number" size='lg' placeholder="Card number" />
          <InputRightElement children={<Icon color='orange.400' w={6} h={6} as={FaCcMastercard} /> } />
        </InputGroup>
      </FormControl>

      <FormControl>
      <FormLabel htmlFor="name" color="gray.500">
          Name
        </FormLabel>
        <InputGroup>
          
          <Input size='lg' placeholder="Card holder name" />
        </InputGroup>
      </FormControl>

      <HStack spacing={10}>
      <FormControl>
      <FormLabel htmlFor="date" color="gray.500">
          Date
        </FormLabel>
        <InputGroup>
         
          <Input size='lg' type='date'  />
        </InputGroup>
      </FormControl>
      <FormControl>
      <FormLabel htmlFor="cvv" color="gray.500">
          CVV
        </FormLabel>
        <InputGroup>
         
          <Input size='lg' type='number' placeholder="cvv" />
          <InputRightElement children={<ViewIcon color="gray.500" />} />
        </InputGroup>
      </FormControl>
      </HStack>
      <HStack spacing={4}>
          <Button size='lg' _hover={{bg:"gray.800"}} bg='black' color='white' fontWeight='medium'>Confirm Order</Button>
          <Button size='lg' variant='ghost' color='gray.500' fontWeight='medium' >Cancel Order</Button>

      </HStack>
    </Stack>
  );
};

export default PaymentForm;

