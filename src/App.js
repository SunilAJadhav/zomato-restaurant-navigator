import React from 'react';
import RestaurantInfoProvider from './providers/RestaurantInfoProvider';
import HeaderNav from './components/HeaderNav';
import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
        <RestaurantInfoProvider>
          <HeaderNav></HeaderNav>
        </RestaurantInfoProvider>
   </React.Fragment>
  );
};

export default App;