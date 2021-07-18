import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`;

export default globalStyle;
