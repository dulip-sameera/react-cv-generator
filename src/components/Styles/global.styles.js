import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Nunito';
    }

    #root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 6% 1fr 5%;
    }

`;
