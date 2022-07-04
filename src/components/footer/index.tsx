import { FC } from "react";
import { Box, VStack, HStack, Text, Link, Flex } from "@chakra-ui/react";
import AppIcon from "../icon-components/app-icon";
import InstagramIcon from "../icon-components/instagram-icon";
import MediumIcon from "../icon-components/medium-icon";
import TwitterIcon from "../icon-components/twitter-icon";
import YouTubeIcon from "../icon-components/youtube-icon";

const FooterLink: FC<{ linkText?: string; url?: string }> = ({
  linkText,
  url,
}) => {
  return (
    <Link
      href={url}
      _hover={{ textDecoration: "none", color: "whiteAlpha.600" }}
    >
      <Text>{linkText}</Text>
    </Link>
  );
};
const AppFooter = () => {
  return (
    <Box as="footer" bg="#002C6E" p={12} color="white">
      <Flex h="full" align="center" justify="space-between">
        <VStack w="40%" spacing={8}>
          <AppIcon type="alt" />

          <HStack spacing={4}>
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <MediumIcon />
          </HStack>

          <HStack spacing={2} color="whiteAlpha.600">
            <Text>Terms</Text>
            <Text>Privacy Policy</Text>
          </HStack>

          <Text color="whiteAlpha.600">Zealoo, Inc. All rights reserved.</Text>
        </VStack>

        <HStack w="60%" justify="space-evenly" align="center">
          <VStack spacing={4}>
            <Text color="#2A80FF">LEARN MORE</Text>
            <FooterLink linkText="How Zealoo works" url="#" />
            <FooterLink linkText="Why Zealoo" url="#" />
            <FooterLink linkText="Common Questions" url="#" />
            <FooterLink linkText="Success Stories" url="#" />
            <FooterLink linkText="Supported Countries" url="#" />
          </VStack>

          <VStack spacing={4}>
            <Text color="#2A80FF">RESOURCES</Text>
            <FooterLink linkText="Help Center" url="#" />
            <FooterLink linkText="Blog" url="#" />
            <FooterLink linkText="About Us" url="#" />
            <FooterLink linkText="Contact Us" url="#" />
            <FooterLink linkText="Communities" url="#" />
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default AppFooter;
