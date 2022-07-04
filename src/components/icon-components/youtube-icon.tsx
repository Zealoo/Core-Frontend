import { CustomIconProps } from "../../types";
import { Icon } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import { FC } from "react";

export interface YouTubeIconProps extends CustomIconProps {}

const YouTubeIcon: FC<YouTubeIconProps> = (youtubeIconProps) => {
  return <Icon as={FaYoutube} {...youtubeIconProps} />;
};

export default YouTubeIcon;
