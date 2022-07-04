import { FC } from "react";
import { Box, Image, BoxProps } from "@chakra-ui/react";

const AppIcon: FC<{ size?: BoxProps["width"]; type?: "default" | "alt" }> = ({
  size = 48,
  type = "default",
}) => {
  return (
    <Box w={size}>
      {type === "default" ? (
        <Image
          draggable={false}
          objectFit="contain"
          src="/assets/icons/zealoo-logo-1.png"
          alt=""
        />
      ) : (
        <Image
          draggable={false}
          objectFit="contain"
          src="/assets/icons/zealoo-logo-alt.svg"
          alt=""
        />
      )}
    </Box>
  );
};

export default AppIcon;
