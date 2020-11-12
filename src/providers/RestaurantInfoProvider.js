import React, { Component } from 'react';
import { getCategories } from '../services/restaurantInfoService';

const RestaurantContext = React.createContext();

export const withRestaurants = WrappedComponent => props => (
  <RestaurantContext.Consumer>
    {restaurantContext => (
      <WrappedComponent
         categoriesList={restaurantContext.categoriesList}
        {...props}
      />
    )}
  </RestaurantContext.Consumer>
);

class RestaurantInfoProvider extends Component {

  state = {
    categoriesList: []
  };

  componentDidMount() {
    this.getLocationInfo();
  }

  async getLocationInfo() {
    const [categoriesList] = await Promise.all([
        getCategories()
      ]);
    this.setState({ categoriesList });
  }

  render() {
    const {
      categoriesList
    } = this.state;
    return (
      <RestaurantContext.Provider
        value={{
          categoriesList,
        }}
      >
        {this.props.children}
      </RestaurantContext.Provider>
    );
  }
}

export default RestaurantInfoProvider;
