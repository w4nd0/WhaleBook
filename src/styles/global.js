import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        //primary's colors:
        --white: #ECFEFE;
        --primary:#363740;
        --button:#CFD6EA;
        --selected-button:#435A98;
        --background:#F2F3F5;
        --border:#DFE3E6;
        --blue:#435A98;
        --green:#35C081;
        --red: #EF5B5B;
        --black: #1D0C15;
        --background-black: #2B2B2B;
    }
        

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: var(--black);
        font-family: 'Poppins', sans-serif;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #0049A3;
        font-weight: 500;
    }

    button {
        cursor: pointer;
        border: none;
    }

    button, input{
        outline: none;
    }

    body {
        background-color: var(--background);
        
    }

    ::-webkit-scrollbar-track {
      background-color: #F4F4F4;
      border-radius: 0px 5px 5px 0px;
  }
  ::-webkit-scrollbar {
      width: 9px;
      background: #F4F4F4;
      border-radius: 0px 5px 5px 0px;
  }
  ::-webkit-scrollbar-thumb {
      background: #dad7d7;
      border-radius: 0px 5px 5px 0px;
  }
`;
