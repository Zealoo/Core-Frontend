import { FC } from "react";
import { Box, Center, Text, VStack, HStack, Image } from "@chakra-ui/react";
import VerifiedIcon from "../icon-components/verified-icon";

const TestimonalCard: FC<{
  withnessImg?: string;
  witnessName?: string;
  witnessRole?: string;
}> = ({ withnessImg, witnessName, witnessRole }) => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${withnessImg})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            draggable={false}
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={withnessImg}
            alt=""
          />
        </Box>
        <VStack pt={10} align={"start"}>
          <HStack>
            <Text>{witnessName}</Text>

            <VerifiedIcon color="brand.800" />
          </HStack>
          <Text color={"#959595"} fontSize={"sm"}>
            {witnessRole}
          </Text>
        </VStack>
      </Box>
    </Center>
  );
};

export default TestimonalCard;
