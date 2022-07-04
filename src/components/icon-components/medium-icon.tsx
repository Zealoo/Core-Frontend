import { CustomIconProps } from "../../types";
import { Icon } from "@chakra-ui/react";
import { SiMedium } from "react-icons/si";
import { FC } from "react";

export interface MediumIconProps extends CustomIconProps {}

const MediumIcon: FC<MediumIconProps> = (mediumIconProps) => {
  return <Icon as={SiMedium} {...mediumIconProps} />;
};

export default MediumIcon;
