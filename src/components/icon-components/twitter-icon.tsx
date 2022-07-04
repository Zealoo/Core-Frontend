import { CustomIconProps } from "../../types";
import { Icon } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { FC } from "react";

export interface TwitterIconProps extends CustomIconProps {}

const TwitterIcon: FC<TwitterIconProps> = (twitterIconProps) => {
  return <Icon as={FaTwitter} {...twitterIconProps} />;
};

export default TwitterIcon;
