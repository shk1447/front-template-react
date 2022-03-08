import { css } from '@emotion/react';

export const globalStyles = css`
  // put global styles here

  html {
    width: 100%;
    height: 100%;

    // https://stackoverflow.com/questions/29605843/how-do-you-add-box-sizing-border-box-to-normalize-css-file
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    height: 100%;

    color: #ffffff;
    overflow: hidden;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .side-sub-panel {
    position: absolute;

    width: 72px;
    height: 100%;

    background: #1f1f28;

    transition: 0.5s ease all;
  }
  .side-sub-panel-content {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 32px;

    opacity: 1;

    transition: 0.3s ease all;
  }

  .side-sub-panel-content.hide {
    width: 0px;

    opacity: 0;
  }

  .side-sub-panel.hide {
    width: 0px;
  }

  .side-sub-panel-toggle {
    position: absolute;
    top: 643px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 98px;
    border-radius: 0px 10px 10px 0px;

    background: #1f1f28;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-corner {
  }

  ::-webkit-scrollbar-thumb {
    z-index: 40;

    border-color: transparent;

    background-color: rgba(151, 151, 151, 0.12);

    transition: 0.3s ease all;
  }
`;
