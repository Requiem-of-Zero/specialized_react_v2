import React from "react";
import { ButtonWrapper, ButtonContainer } from "./Button.styles";
import GlobalStyles from "../../pages/global.css";

const Button = ({
  ctaTxt,
  url,
  opensNewTab,
  textColor,
  background,
  border,
}) => {
  return (
    <ButtonWrapper>
      <GlobalStyles />
      <ButtonContainer
        href={url}
        background={background}
        border={border}
        textColor={textColor}
        target={opensNewTab ? "_blank" : "_self"}
      >
        {ctaTxt}
      </ButtonContainer>
    </ButtonWrapper>
  );
};

export default Button;
