import styled from "styled-components";

export const ButtonWrapper = styled.div``;

export const ButtonContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({width}) => width};
  height: 40px;
  padding: 4px 16px;

  text-decoration: none;
  background: ${({background}) => background};
  color: ${({textColor}) => textColor || `black`};
  border: 1px solid ${({border}) => border};
  border-radius: 8px;
`;
