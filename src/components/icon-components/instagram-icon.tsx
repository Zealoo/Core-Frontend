import { CustomIconProps } from "../../types";
import { Icon } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FC } from "react";

export interface InstagramIconProps extends CustomIconProps {}

const InstagramIcon: FC<InstagramIconProps> = (instagramIconProps) => {
  return <Icon as={FaInstagram} {...instagramIconProps} />;
};

export default InstagramIcon;
