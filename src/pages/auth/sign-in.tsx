import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  VStack,
  HStack,
  Link,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import AppIcon from "../../components/icon-components/app-icon";

export default function Login() {
  const router = useRouter();
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Head>
        <title>Login</title>
      </Head>
      <VStack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Link href="/">
          <AppIcon size={[24, 32, 48]} />
        </Link>

        <Box
          w={{ base: "auto", md: "md" }}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
        >
          <HStack>
            <Box
              as="a"
              w="full"
              h="full"
              p={5}
              onClick={() => router.push("/auth/sign-up")}
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              borderBottomColor="gray.100"
            >
              <Text textAlign="center">Sign up</Text>
            </Box>

            <Box
              w="full"
              h="full"
              p={5}
              borderBottomWidth={1}
              borderBottomStyle="solid"
              borderBottomColor="gray.500"
            >
              <Text textAlign="center">Sign In</Text>
            </Box>
          </HStack>
          <VStack spacing={4} p={8}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="e.g johndoe@gmail.com" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="e.g justify@#123" />
            </FormControl>
            <Stack spacing={10} w="full">
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button colorScheme="brand">Sign in</Button>
            </Stack>
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
}
