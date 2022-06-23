import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
 @media only screen and (max-width: 500px) {
  html {
    font-size:13px;
  }
 }
`;

export default GlobalStyles;
