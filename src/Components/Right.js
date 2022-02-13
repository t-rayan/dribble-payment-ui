import {
  Box,
  Heading,
  HStack,
  Flex,
  Icon,
  Center,
  Text,
} from "@chakra-ui/react";
import { FaShippingFast, FaCreditCard, FaRev } from "react-icons/fa";
import React from "react";
import Acc from "./Acc";

const Right = () => {
  return (
    <Box height="100%" padding="2rem">
      <Heading as="h3" size="lg">
        Order Summary
      </Heading>
      <Box mt={10}>
        <Flex justifyContent="space-between">
          <HStack spacing={5}>
            <Center bg="blue.100" w={[null,8,9,12]} h={[null,8,9,12]} borderRadius="full">
              <Icon as={FaShippingFast} w={[null,null,5]} h={[null,null,5]} color="blue.400" />
            </Center>
            <Box>
              <Text color="gray.400">Step 1</Text>
              <Text color="gray.400">Shipping</Text>
            </Box>
          </HStack>
          <Box>
            <HStack spacing={5}>
              <Center bg="orange.100"  w={[null,8,9,12]} h={[null,8,9,12]} borderRadius="full">
                <Icon as={FaCreditCard} w={[null,null,5]} h={[null,null,5]} color="orange.400" />
              </Center>
              <Box>
                <Text color="gray.400">Step 2</Text>
                <Text>Payment</Text>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack spacing={5}>
              <Center bg="green.100" w={[null,8,9,12]} h={[null,8,9,12]} borderRadius="full">
                <Icon as={FaRev} w={[null,null,5]} h={[null,null,5]} color="green.400" />
              </Center>
              <Box>
                <Text color="gray.400">Step 3</Text>
                <Text color="gray.400">Review</Text>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Box>

      <Box mt={10}>
        <Acc />
      </Box>
      <Box display='flex' justifyContent='space-between' mt={10}>
        <Text fontSize='1.1rem' fontWeight='bold' >Total Amount</Text>
        <Text fontSize='1.1rem' fontWeight='bold'>$3680.60</Text>
      </Box>
    </Box>
  );
};

export default Right;
