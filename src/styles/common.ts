import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from './theme';
import { mediaFactor } from './device.const';

export const Common = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    ${mediaFactor.mobile};
  }

  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    min-height: 100vh;
    // background-color: ;
    font-family: ${theme.font.main};
    font-size: 18px;
    //max-width: calc(100% - 40px);
    //margin-left: auto;
    //margin-right: auto;
    //overflow: hidden;
  }

  * {
    box-sizing: border-box;
    //outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, menu {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    //font-weight: 400;
    //font-size: inherit;
  }

  input {
    border: none;
    color: inherit;
    font-family: inherit;
    border-radius: 0;
    padding: 0;

    &[type="password"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none !important;

      &::-ms-clear {
        display: none;
      }

      &::-ms-reveal {
        display: none;
      }

      //noinspection ALL
      &::-webkit-contacts-auto-fill-button {
        visibility: hidden;
        display: none !important;
        pointer-events: none;
        position: absolute;
        right: 0;
      }

      //noinspection ALL
      &::-webkit-credentials-auto-fill-button {
        visibility: hidden;
        display: none !important;
        pointer-events: none;
        position: absolute;
        right: 0;
      }
    }
  }

  button {
    border: none;
    font-family: inherit;
    padding: 0;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }

  select {
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    color: inherit;
    cursor: pointer;

    option {
      background-color: inherit;
      color: #000;
    }
  }

  svg {
    max-width: 100%;
    display: block;
  }
`;
