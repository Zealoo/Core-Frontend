import {
  Box,
  Button,
  Flex,
  HStack,
  VStack,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import AppIcon from "./icon-components/app-icon";

interface LinkStyleInfo {
  name: string;
  active: boolean;
}

// eslint-disable-next-line no-unused-vars
type SetActiveFn = (name: string) => void;

const useActiveLink = (
  linkInfo: LinkStyleInfo[],
  defaultActiveLink = linkInfo.find((link) => link.active === true)?.name,
  // eslint-disable-next-line no-unused-vars
): [LinkStyleInfo[], SetActiveFn, () => void, (name: string) => void] => {
  const [activeLink, setActiveLink] = useState(linkInfo);

  const setActive = (name: string) => {
    setActiveLink((currentActiveLinkState) => {
      return currentActiveLinkState.map((link) => {
        if (link.name === name) {
          link.active = true;
        } else {
          link.active = false;
        }
        return link;
      });
    });
  };

  const setAsDefault = (name: string) => {
    defaultActiveLink = name;
  };

  const resetToDefaultActiveLink = () => {
    setActive(defaultActiveLink as string);
  };

  return [activeLink, setActive, resetToDefaultActiveLink, setAsDefault];
};

const NavBarLinks = () => {
  const [activeLinkState, setActive, resetToDefaultActiveLink, setAsDefault] =
    useActiveLink([
      { name: "home", active: true },
      { name: "communities", active: false },
      { name: "live-events", active: false },
      { name: "blog", active: false },
      { name: "about-us", active: false },
    ]);

  const [home, communities, liveEvents, blog, aboutUs] = activeLinkState;
  return (
    <HStack
      spacing={6}
      display={{ base: "none", lg: "flex" }}
      sx={{ "a:hover": { textDecoration: "none" } }}
    >
      <Box
        w="max"
        h="max"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Link
          onMouseOver={() => setActive(home.name)}
          onClick={() => setAsDefault(home.name)}
          href="/"
        >
          <Text color={home.active ? "002C6E" : "#C0CCDE"}>Home</Text>
        </Link>

        {home.active && (
          <Image alt="" src="/assets/icons/indicator-circle.svg" boxSize={2} />
        )}
      </Box>

      <Box
        w="max"
        h="max"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Link
          onClick={() => setAsDefault(communities.name)}
          onMouseOver={() => setActive(communities.name)}
          onMouseLeave={resetToDefaultActiveLink}
          href="/communities"
        >
          <Text color={communities.active ? "002C6E" : "#C0CCDE"}>
            Communities
          </Text>
        </Link>

        {communities.active && (
          <Image alt="" src="/assets/icons/indicator-circle.svg" />
        )}
      </Box>

      <Box
        w="max"
        h="max"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Link
          onClick={() => setAsDefault(liveEvents.name)}
          onMouseOver={() => setActive(liveEvents.name)}
          onMouseLeave={resetToDefaultActiveLink}
          href="/live-events"
        >
          <Text color={liveEvents.active ? "002C6E" : "#C0CCDE"}>
            Live Events
          </Text>
        </Link>
        {liveEvents.active && (
          <Image alt="" src="/assets/icons/indicator-circle.svg" />
        )}
      </Box>

      <Box
        w="max"
        h="max"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Link
          onClick={() => setAsDefault(blog.name)}
          onMouseOver={() => setActive(blog.name)}
          onMouseLeave={resetToDefaultActiveLink}
          href="/blog"
        >
          <Text color={blog.active ? "002C6E" : "#C0CCDE"}>Blog</Text>
        </Link>

        {blog.active && (
          <Image alt="" src="/assets/icons/indicator-circle.svg" />
        )}
      </Box>

      <Box
        w="max"
        h="max"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Link
          onClick={() => setAsDefault(aboutUs.name)}
          onMouseOver={() => setActive(aboutUs.name)}
          onMouseLeave={resetToDefaultActiveLink}
          href="/about-us"
        >
          <Text color={aboutUs.active ? "002C6E" : "#C0CCDE"}>About us</Text>
        </Link>

        {aboutUs.active && (
          <Image alt="" src="/assets/icons/indicator-circle.svg" />
        )}
      </Box>
    </HStack>
  );
};

const NavBar = () => {
  const router = useRouter();
  return (
    <Box as="nav">
      <Flex align="center" justify="space-around" p={4}>
        <AppIcon size={[24, 32, 48]} />

        <Flex
          w="70%"
          align="center"
          gap="10%"
          justify={{ base: "end", lg: "space-around" }}
        >
          <NavBarLinks />

          <HStack spacing={2}>
            <Button
              bg="transparent"
              color="#002C6E"
              onClick={() => router.push("/auth/sign-in")}
            >
              Sign In
            </Button>

            <Button
              bgColor="#002C6E"
              color="white"
              onClick={() => router.push("/auth/sign-up")}
            >
              Register
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
