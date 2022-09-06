import React from "react";
import { ButtonWrapper, ButtonContainer } from "./Button.styles";
import GlobalStyles from "../../pages/global.css";

const Button = () => {
  return (
    <ButtonWrapper>
      <GlobalStyles />
      <ButtonContainer href='https://www.google.com'>
        Button
      </ButtonContainer>
    </ButtonWrapper>
  );
};

export default Button;
