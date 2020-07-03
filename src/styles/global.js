import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    /* background: #191920 url(${githubBackground}) no-repeat 70% top; */
    background: #F0F0F5 url(${githubBackground}) no-repeat 100% top fixed;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px Roboto, sans-serif
  }

  #root{
    /* max-width: 960px; */
    margin: 0 auto;
    padding: 20px 20px;
  }

  button{
    cursor: pointer
  }

  .Toastify__toast-container--top-right {
    top: 6em;
    right: 1em;
}

  .Toastify__toast--error {
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  /* background-color: #ff3434; */
  background-color: #ff4c4c;
}

.Toastify__toast--success {
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  /* background-color: #30A14E; */
  background-color: #40C463;
}

.Toastify__close-button {
  color: #fff;
  opacity:1
}
.Toastify__progress-bar {
  height: 4px;
}

`;
