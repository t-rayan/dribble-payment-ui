import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Spacer,
  Stack,
} from "@chakra-ui/react";

const Acc = () => {
  return (
    <Accordion border="transparent" defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton bg="gray.100" p="5" _focus={{outline: 'none'}} borderRadius='md' >
            <Box flex="1" textAlign="left">
              Prada
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p={5}>
          <Stack spacing={7}>
            <Flex justifyContent="space-between">
              <Text color="gray.500">Leather min-bag</Text>
              <Text>$1850.00</Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Text color="gray.500">Estimated shipping</Text>
              <Text>$370.00</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text color="gray.500">Discount</Text>
              <Text>$1850.00</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text color="gray.500">Total</Text>
              <Text>$1850.00</Text>
            </Flex>
          </Stack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem mt={5}>
        <h2>
          <AccordionButton bg="gray.100" p="5" _focus={{outline: 'none'}} borderRadius='md'>
            <Box flex="1" textAlign="left">
              Chanel
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}></AccordionPanel>
      </AccordionItem>

      <AccordionItem mt={5}>
        <h2>
          <AccordionButton bg="gray.100" p="5" _focus={{outline: 'none'}} borderRadius='md'>
            <Box flex="1" textAlign="left">
              Dr.Martens
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}></AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Acc;
