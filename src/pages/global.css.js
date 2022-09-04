import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
`

export default GlobalStyle;