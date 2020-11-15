import React from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';
import {RestaurantContainer, ListViewElement, TextSubHeader} from '../styles/resteaurantViewStyles';

const RestaurantsLeftNav = ({ restaurantList, toggleActiveRestaurant, activeCost, activeRating, activeRestaurant }) => (
  <RestaurantContainer>
    <TextSubHeader>Results</TextSubHeader>
    <ul>
      {restaurantList.map((restaurant) => {
        const isCost = restaurant.price >= activeCost[0] && restaurant.price <= activeCost[1];
        const isRating = restaurant.rating >= activeRating[0] && restaurant.rating <= activeRating[1];
        const isSelected = activeRestaurant.id === restaurant.id ? true : false;

        return (isCost && isRating) && (
          <ListViewElement
            key={restaurant.id}
            isSelected = {isSelected}
            onClick={() => toggleActiveRestaurant(restaurant)}
          >{restaurant.name}
          </ListViewElement>
        );
      })}
    </ul>
  </RestaurantContainer>
);

export default withRestaurants(RestaurantsLeftNav);
