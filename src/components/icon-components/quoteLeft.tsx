import { FC } from "react";
import { Icon, Image } from "@chakra-ui/react";
import { CustomIconProps } from "../../types";

interface QuoteLeftProps {
  height?: CustomIconProps["height"];
  width?: CustomIconProps["width"];
}

const QuoteImg: FC<QuoteLeftProps> = ({ width, height }) => {
  return (
    <>
      <Image
        alt=""
        src="/assets/icons/Quote.svg"
        width={width}
        height={height}
      />
    </>
  );
};

const QuoteLeft: FC<QuoteLeftProps> = ({ width, height }) => {
  return <Icon width={width} height={height} as={QuoteImg} />;
};

export default QuoteLeft;
