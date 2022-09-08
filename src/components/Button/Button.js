import React from "react";
import { ButtonWrapper, ButtonContainer } from "./Button.styles";

const Button = ({
  ctaTxt,
  url,
  opensNewTab,
  textColor,
  background,
  border,
  width,
  hover
}) => {
  return (
    <ButtonWrapper>
      <ButtonContainer
        href={url}
        background={background}
        border={border}
        textColor={textColor}
        target={opensNewTab ? "_blank" : "_self"}
        width={width}
        hover={hover}
      >
        {ctaTxt}
      </ButtonContainer>
    </ButtonWrapper>
  );
};

export default Button;
