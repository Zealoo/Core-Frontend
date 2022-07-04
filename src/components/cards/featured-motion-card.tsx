import { FC } from "react";
import { Box, VStack, Link, HStack, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export interface FeaturedMotionCardProps {
  motionSignatureImg?: string;
  motionCategory?: string;
  motionDescription?: string;
}

const FeaturedMotionCard: FC<FeaturedMotionCardProps> = ({
  motionCategory,
  motionSignatureImg,
  motionDescription,
}) => {
  return (
    <Box w="280px" h="max" bg="#EDF4FF" borderRadius="xl">
      <VStack h="full">
        <Box>
          <Image
            src={motionSignatureImg}
            objectFit="contain"
            draggable={false}
            alt=""
          />
        </Box>

        <Box p={4}>
          <VStack spacing={8} align="start">
            <Text>{motionDescription}</Text>

            <Link _hover={{ textDecoration: "none" }}>
              <HStack>
                <Text color="brand.600">Donate</Text>
                <ArrowForwardIcon color="brand.600" />
              </HStack>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default FeaturedMotionCard;
