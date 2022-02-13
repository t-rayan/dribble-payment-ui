import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Input,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";

import PaymentForm from "./PaymentForm";
import CCard from "./CCard";
import { AddIcon } from "@chakra-ui/icons";

const TabMenu = () => {
  return (
    <Tabs colorScheme="black">
      <TabList>
        <Tab _focus={{ outline: "none" }} py="5" fontWeight="bold">
          Credit Card
        </Tab>
        <Tab _focus={{ outline: "none" }} color="gray.500">
          Paypal
        </Tab>
        <Tab _focus={{ outline: "none" }} color="gray.500">
          Other
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Grid gridTemplateColumns={{base: "1fr", lg: ".4fr 1fr"}} alignItems="center" gap={10}>
            <GridItem display="grid" gap={7}>
              <CCard bcolor="purple.200" jc="space-between">
                <Text
                  color="blackAlpha.600"
                  fontSize="1.2rem"
                  fontWeight="bold"
                >
                  {" "}
                  **** 4323{" "}
                </Text>
                <Icon as={FaCcMastercard} w={8} h={8} color="black.600" />
              </CCard>
              <CCard bcolor="orange.200" jc="space-between">
                <Text
                  color="blackAlpha.600"
                  fontSize="1.2rem"
                  fontWeight="bold"
                >
                  {" "}
                  **** 1234{" "}
                </Text>
                <Icon as={FaCcVisa} w={8} h={8} color="black.600" />
              </CCard>
              <CCard bcolor="green.200" jc="center" >
                <Flex justifySelf='center' >
                  <Text
                    color="blackAlpha.600"
                    fontSize="1.1rem"
                    fontWeight="medium"
                    mr={3}
                  >
                    {" "}
                    Add new{" "}
                  </Text>
                  <Center w={6} h={6} bg='black'  borderRadius='full' >
                  <AddIcon p={1} color='white' />

                  </Center>
                </Flex>
              </CCard>
            </GridItem>
            <GridItem px={15}>
              <PaymentForm />
            </GridItem>
          </Grid>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabMenu;
