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

.sliders {
  flex-basis: 35%;
  padding-left: 20px;
}

.rangeDifference {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}

.slider:first-child {
  margin-bottom: 5px;
}

.slider .listSubhead {
  margin-bottom: 3px;
}

.rc-slider {
  height: 18px;
  width: 95%;
  margin: 0 auto;
}

.rc-slider .rc-slider-handle {
  margin-top: -3px;
  border: 1px solid #00c1c0;
  background: #f1f1f1;
  box-shadow: none;
}

.rc-slider .rc-slider-rail {
  height: 8px;
  background: #f1f1f1;
}

.rc-slider .rc-slider-step {
  height: 8px;
}

.rc-slider .rc-slider-track {
  height: 8px;
  background: #00c1c0;
}


`
export default GlobalStyles;

