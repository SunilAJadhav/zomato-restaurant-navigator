import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #333;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    background-color: #FFFFFF;
    font-family: 'RobotoRegular','Roboto','Droid Sans','Helvetica Neue','Segoe UI','Segoe','Open Sans','Helvetica','Arial',sans serif;
  }

  * {
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

html,
body {
  margin: 0;
}
`
export default GlobalStyles;
