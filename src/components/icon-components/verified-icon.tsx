import { FC } from "react";
import { MdVerified } from "react-icons/md";
import { Icon } from "@chakra-ui/react";
import { CustomIconProps } from "../../types";

export interface VerifiedIconProps extends CustomIconProps {}

const VerifiedIcon: FC<VerifiedIconProps> = (verifiedIconProps) => {
  return <Icon as={MdVerified} {...verifiedIconProps} />;
};

export default VerifiedIcon;
