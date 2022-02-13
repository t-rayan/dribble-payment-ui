import { ChevronDownIcon, LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import TabMenu from "./TabMenu";

const Left = () => {
  return (
    <Box shadow="lg" bg="white" height="100%" padding="2rem" borderRadius="md">
      <Flex align="center">
        <Box>
          <Heading size={"md"}> Tolly</Heading>
        </Box>
        <Spacer />
        <Box display="flex" alignItems="center">
          <Menu>
            <MenuButton as={Button} leftIcon={<ChevronDownIcon w={6} h={6} />}>
              Tom
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
            <Avatar
              marginLeft="2"
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </Menu>
        </Box>
      </Flex>
      <Flex mt={10} justifyContent="space-between">
        <Heading fontSize={["0rem","1.8rem", "2rem"]}>Payment details</Heading>
        <Box display="flex" >
          <LockIcon mr={[2]} w={[null,5,6]} h={[null,5,6]} />
          <Stack>
            <Heading as="h4" size={["md"]}>
              Card is secure
            </Heading>
            <Text color="gray.500" fontSize={[null, '.8rem', '1rem']} >
              Your data is protected everything <br /> will be private
            </Text>
          </Stack>
        </Box>
      </Flex>

      <Box>
        <TabMenu />
      </Box>
    </Box>
  );
};

export default Left;
