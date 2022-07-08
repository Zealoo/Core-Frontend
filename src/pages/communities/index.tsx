import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import AppFooter from "../../components/footer";
import NavBar from "../../components/navbar";

const Communities: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Communities | Zealoo</title>
      </Head>

      <main>
        <Box as="header" h="max">
          <NavBar />

          <Box as="section" h="100vh">
            <Flex h="full" direction="column" justify="center" align="center">
              <Box w="80%" h="80%" bg="#2A80FF" borderRadius="md">
                <Flex h="full" justify="space-between">
                  <VStack
                    h="full"
                    w="50%"
                    align="start"
                    justify="center"
                    p={8}
                    spacing={12}
                  >
                    <Heading
                      sx={{ fontFamily: "var(--circular-std)" }}
                      lineHeight="40px"
                      as="h4"
                      color="white"
                      fontSize="1.5rem"
                    >
                      Explore Communities
                    </Heading>

                    <Text color="white" lineHeight="30px">
                      You can be a part of the motion. You also can insight
                      change and provide that vital support to a cause. Feel
                      free to join a community so your voice can be projected.
                    </Text>

                    <HStack>
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <SearchIcon color="brand.600" />
                        </InputLeftElement>

                        <Input
                          bg="#71AAFF"
                          color="white"
                          _placeholder={{ color: "#CCE1FF" }}
                          border="none"
                          type="tel"
                          placeholder="Search communities"
                        />
                      </InputGroup>

                      <Button bg="white" color="brand.800">
                        Search
                      </Button>
                    </HStack>
                  </VStack>

                  <Box h="full" w="50%" overflow="hidden">
                    <Flex h="full" align="end" justify="end">
                      <Image src="/assets/icons/CZ.svg" boxSize="sm" alt="" />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </main>

      <AppFooter />
    </Fragment>
  );
};

export default Communities;
