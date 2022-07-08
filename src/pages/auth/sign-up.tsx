import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import useForm from "../../shared/hooks/useForm";
import AppIcon from "../../components/icon-components/app-icon";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, handleFormData] = useForm({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passMatch, setPassMatch] = useState(false);

  const checkIfPassIsConfirmed = () => {
    if (formData.password === formData.confirmPassword) {
      setPassMatch(true);
    } else {
      setPassMatch(false);
    }
  };

  const submitFormData = async () => {
    if (passMatch) {
      const response = await fetch(
        "https://zealoo-server.herokuapp.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            type: "applicaiton/json",
          },
          body: JSON.stringify({
            first_name: formData.firstName,
            last_name: formData.lastName,
            user_name: formData.userName,
            email: formData.email,
            password: formData.password,
          }),
        },
      ).then((res) => res.json());

      localStorage.setItem("testUsers", JSON.stringify(response));
    }
  };

  const router = useRouter();
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
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
              w="full"
              h="full"
              p={5}
              borderBottomWidth={1}
              borderBottomStyle="solid"
              borderBottomColor="gray.500"
            >
              <Text textAlign="center">Sign Up</Text>
            </Box>
            <Box
              as="a"
              onClick={() => router.push("/auth/sign-in")}
              w="full"
              h="full"
              p={5}
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              borderBottomColor="gray.100"
            >
              <Text textAlign="center">Sign In</Text>
            </Box>
          </HStack>
          <VStack spacing={4} p={8}>
            {/* firstname field */}
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleFormData}
                type="text"
                placeholder="e.g John"
              />
            </FormControl>
            {/* lastname field */}
            <FormControl id="lastName" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                name="lastName"
                value={formData.lastname}
                onChange={handleFormData}
                type="text"
                placeholder="e.g Doe"
              />
            </FormControl>
            {/* username field */}
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                name="userName"
                value={formData.userName}
                onChange={handleFormData}
                type="text"
                placeholder="e.g Doe17"
              />
            </FormControl>
            {/* email field */}
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={formData.email}
                onChange={handleFormData}
                type="email"
                placeholder="e.g johndoe@gmail.com"
              />
            </FormControl>
            {/* password field */}
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={formData.password}
                  onChange={handleFormData}
                  placeholder="e.g rosemary#2123"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {/* Confirm password field */}
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                {passMatch ? (
                  <Input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleFormData}
                    onKeyUp={checkIfPassIsConfirmed}
                    placeholder="e.g rosemary#2123"
                    type={showConfirmPassword ? "text" : "password"}
                  />
                ) : (
                  <Input
                    borderColor="red.300"
                    isInvalid
                    errorBorderColor="red.300"
                    _focus={{ boxShadow: "none", borderColor: "red.300" }}
                    boxShadow="none"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleFormData}
                    onKeyUp={checkIfPassIsConfirmed}
                    placeholder="e.g rosemary#2123"
                    type={showConfirmPassword ? "text" : "password"}
                  />
                )}

                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowConfirmPassword(
                        (showConfirmPassword) => !showConfirmPassword,
                      )
                    }
                  >
                    {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} w="full">
              <Stack>
                <Text align={"center"}>
                  Already a us?{" "}
                  <Link href="/auth/sign-in">
                    <Text as="span" color={"blue.400"}>
                      Login
                    </Text>
                  </Link>
                </Text>
              </Stack>
              <Button colorScheme="brand" onClick={submitFormData}>
                Sign up
              </Button>
            </Stack>
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
}
