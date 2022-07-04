import type { NextPage } from "next";
import { Fragment } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { CheckIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import NavBar from "../components/navbar";
import TestimonalCard from "../components/cards/testimonal-card";
import QuoteLeft from "../components/icon-components/quoteLeft";
import AppFooter from "../components/footer";
import FeaturedMotionCard from "../components/cards/featured-motion-card";

const Home: NextPage = () => {
  return (
    <Fragment>
      <main>
        <Box
          bg="#F2F6FD"
          position="absolute"
          h="100vh"
          w="70vw"
          top={0}
          left={0}
          zIndex="hide"
        ></Box>

        <Box as="header" h="max">
          <NavBar />
          <Box as="section" h="82vh" p={0}>
            <Flex align="end" justify="space-around" h="full">
              <VStack
                spacing={4}
                h="full"
                justify="center"
                align="start"
                w="30%"
              >
                <Text textTransform="uppercase" fontSize="md">
                  Empower the motion
                </Text>
                <Text fontSize="5xl" lineHeight="50px">
                  Donate to the right cause
                </Text>

                <HStack>
                  <Button color="#F2F6FD" bg="#002C6E">
                    Donate Now
                  </Button>

                  <Button variant="outline" colorScheme="brand">
                    Explore Motions
                  </Button>
                </HStack>
              </VStack>

              <Box boxSize="md" bg="red" borderTopRadius="md">
                <Image
                  borderTopRadius="md"
                  objectFit="cover"
                  w="full"
                  h="full"
                  src="/assets/images/tgherness.png"
                  alt="together"
                />
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box as="section" h="20vh" bg="#2A80FF">
          <Flex
            color="white"
            p={8}
            h="full"
            align="center"
            justify="space-around"
          >
            <HStack align="center">
              <Text fontSize="3rem">2K+</Text>
              <Text fontSize=".8rem">
                Impactful Motions <br /> Moved
              </Text>
            </HStack>

            <HStack>
              <Text fontSize="3rem">$100k+</Text>
              <Text fontSize=".8rem">
                Total Amount <br /> Donated
              </Text>
            </HStack>

            <HStack>
              <Text fontSize="3rem">50K+</Text>
              <Text fontSize=".8rem">
                Active Community <br /> Members
              </Text>
            </HStack>
          </Flex>
        </Box>

        <Box as="section" h="100vh">
          <Flex h="full">
            <Box w="50%" h="full">
              <VStack h="full" justify="center" spacing={8}>
                <Heading as="h4">What We Do</Heading>

                <Tabs colorScheme="brand" w="60%" borderColor="transparent">
                  <TabList>
                    <Tab>Our Story</Tab>
                    <Tab>Our Mission</Tab>
                    <Tab>Our Values</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Text lineHeight="35px" color="#959595">
                        Zealoo is a platform that enables activists or people
                        who are trying to get donations from those who believe
                        in their vision.
                      </Text>
                    </TabPanel>

                    <TabPanel>
                      <Text color="#959595">
                        We aim to empower would changers to drive a cause for
                        humanity.
                      </Text>
                    </TabPanel>

                    <TabPanel>
                      <Text color="#959595">Trust, Peace and Togetherness</Text>
                    </TabPanel>
                  </TabPanels>
                </Tabs>

                <List spacing={6}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="brand.800" />
                    We are built on the generosity of individuals.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="brand.800" />
                    We strive to help create engaged communities.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="brand.800" />
                    We believe it takes more than one to move a motion.
                  </ListItem>
                </List>
              </VStack>
            </Box>
            <Box w="50%" h="full">
              <VStack justify="end" h="full">
                <Box
                  bg="#F2F6FD"
                  overflow="hidden"
                  h="90%"
                  w="full"
                  borderTopLeftRadius="md"
                >
                  <VStack h="full" align="end" justify="end">
                    <Box borderTopLeftRadius="md" h="90%" w="90%">
                      <Image
                        src="/assets/images/cmn1.png"
                        objectFit="contain"
                        alt=""
                        transform="scale(0.9)"
                      />
                    </Box>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>

        <Box
          as="section"
          h={{ base: "max", lg: "100vh" }}
          bg="#5A9DFF"
          overflow="hidden"
        >
          <Flex direction={{ base: "column-reverse", lg: "row" }} h="full">
            <VStack
              p={[4, 4, 0]}
              w={{ base: "100%", lg: "50%" }}
              h="full"
              justify="center"
              align="center"
            >
              <Heading
                display={["none", "none", "inline"]}
                color="white"
                sx={{ fontFamily: "var(--circular-std)" }}
              >
                Success Stories
              </Heading>

              <TestimonalCard
                witnessName="Jola Ayeye"
                witnessRole="Member, Feminist Coalition"
                withnessImg="/assets/images/testimonal-lady-1.png"
              />
            </VStack>

            <VStack
              p={[4, 4, 0]}
              w={{ base: "100%", lg: "50%" }}
              h="full"
              justify="center"
              align="start"
            >
              <QuoteLeft />
              <Text
                color="white"
                fontSize={["1.6rem", "1.8rem", "2rem"]}
                lineHeight="55px"
              >
                Zealoo was helpful and efficient in helping us raise the funds
                needed to provide scholarships for low-income schoolgirls.
              </Text>
            </VStack>
          </Flex>
        </Box>

        <Box as="section" h="100vh">
          <Flex h="full" direction="column" justify="center" align="center">
            <VStack h="full" align="start" w="85%" p={8}>
              <Text color="#222">WHERE YOU CAN HELP</Text>
              <Flex w="full" align="center" justify="space-between">
                <Heading as="h5" color="#222" fontSize="1.8rem">
                  Featured Motions
                </Heading>

                <Link _hover={{ textDecoration: "none" }}>
                  <HStack>
                    <Text color="brand.600">See More</Text>
                    <ArrowForwardIcon color="brand.600" />
                  </HStack>
                </Link>
              </Flex>

              <Box w="full" h="full">
                <Flex h="full" w="full" align="center" justify="space-between">
                  <FeaturedMotionCard
                    motionSignatureImg="/assets/images/food-donation.png"
                    motionDescription="We aim to feed less privileged communities and provide support for the needy."
                  />
                  <FeaturedMotionCard
                    motionSignatureImg="/assets/images/laptop-donation.png"
                    motionDescription="Help us provide laptops to 1000 women to proceed in careers in tech."
                  />
                  <FeaturedMotionCard
                    motionSignatureImg="/assets/images/children-donation.png"
                    motionDescription="Your effort is needed in providing good healthcare and welfare for children."
                  />
                </Flex>
              </Box>
            </VStack>
          </Flex>
        </Box>

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
                    Join thousands of others in making impactful change today!
                  </Heading>

                  <Text color="white">
                    You can be a part of the motion. You also can insight change
                    and provide that vital support to a cause. Feel free to join
                    a community so your voice can be projected.
                  </Text>

                  <Button bg="white" color="brand.800">
                    Join A Community
                  </Button>
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
      </main>

      <AppFooter />
    </Fragment>
  );
};

export default Home;
