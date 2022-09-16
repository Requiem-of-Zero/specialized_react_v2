import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0
}
    body {
        margin: 0;
        padding: 0;
        color: black;
        font-family: Arial;
    }

    ul, p, li, a {
        padding: 0;
        margin: 0;
    }

    .navBarDivider {
        height: 100px;
    }
`;

export default GlobalStyle;
