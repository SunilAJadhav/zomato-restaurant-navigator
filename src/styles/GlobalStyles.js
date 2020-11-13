import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #333;
    font-size: 14px;
    line-height: 20px;
    background-color: #FFFFFF;
    font-family: 'RobotoRegular','Roboto','Droid Sans','Helvetica Neue','Segoe UI','Segoe','Open Sans','Helvetica','Arial',sans serif;
  }

  * {
  box-sizing: border-box;
}

img {
  width: 100%;
  height: auto;
}

ul{
  padding: 0;
  margin: 0;
}

ul li{
  padding: 0;
  margin: 0;
  list-style: none;
}

html,
body {
  margin: 0;
}
`
export default GlobalStyles;

