import React from 'react';
import RestaurantInfoProvider from './providers/RestaurantInfoProvider';
import HeaderNav from './components/HeaderNav';
import RestaurantsLeftNav from './components/RestaurantsLeftNav';
import RestaurantDetailsView from './components/RestaurantDetailsView';
import GlobalStyle from './styles/GlobalStyles';
import {MainContainer} from './styles/HeaderStyles';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
        <RestaurantInfoProvider>
            <HeaderNav></HeaderNav>
            <MainContainer>
                <RestaurantsLeftNav></RestaurantsLeftNav>
                <RestaurantDetailsView></RestaurantDetailsView>
            </MainContainer>
        </RestaurantInfoProvider>
   </React.Fragment>
  );
};

export default App;