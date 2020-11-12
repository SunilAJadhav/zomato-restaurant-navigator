import React, { Component } from 'react';
import { getCategories, getCuisines } from '../services/restaurantInfoService';

const RestaurantContext = React.createContext();

export const withRestaurants = WrappedComponent => props => (
  <RestaurantContext.Consumer>
    {restaurantContext => (
      <WrappedComponent
         categoriesList={restaurantContext.categoriesList}
         cuisinesList={restaurantContext.cuisinesList}
        {...props}
      />
    )}
  </RestaurantContext.Consumer>
);

class RestaurantInfoProvider extends Component {

  state = {
    categoriesList: [],
    cuisinesList: [],
  };

  componentDidMount() {
    this.getLocationInfo();
  }

  async getLocationInfo() {
    const [categoriesList, cuisinesList] = await Promise.all([
        getCategories(),
        getCuisines()
      ]);
    this.setState({ categoriesList, cuisinesList });
  }

  render() {
    const {
      categoriesList,
      cuisinesList,
    } = this.state;
    return (
      <RestaurantContext.Provider
        value={{
          categoriesList,
          cuisinesList,
        }}
      >
        {this.props.children}
      </RestaurantContext.Provider>
    );
  }
}

export default RestaurantInfoProvider;
