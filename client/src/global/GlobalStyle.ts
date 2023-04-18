import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --bg-background: rgba(0, 0, 0, 0.31);
    --bg-container:#FFFFFF;
    --bg-primary-gray: #EDEDED;
    --bg-secondary-gray: #F9F9F9;
    --bg-line:#EBEBEB;
    --bg-red: #e83737;
    --bg-done:#0CAB2F;
    --text-color:#696969;
    --money-color:#2C9A44;
}

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html, body, #root {
    height:100%;
}

body {
    font-family: 'Roboto', sans-serif;
    color: var(--text-color);
}

a {
    text-decoration: none;
    color:var(--text-color);

    &:hover{
        text-decoration: underline;
    }
}
`;
