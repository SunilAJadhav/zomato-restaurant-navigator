import React from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';
import {RestaurantContainer} from '../styles/resteaurantViewStyles';

const RestaurantsLeftNav = ({ restaurantList, toggleActiveRestaurant, activeCost, activeRating, selectedRestaurant }) => (
  <RestaurantContainer>
    <h2>Results</h2>
    <ul>
      {restaurantList.map((restaurant) => {
        const isCost = restaurant.price >= activeCost[0] && restaurant.price <= activeCost[1];
        const isRating = restaurant.rating >= activeRating[0] && restaurant.rating <= activeRating[1];
        return (isCost && isRating) && (
          <li
            key={restaurant.id}
            onClick={() => toggleActiveRestaurant(restaurant)}
          >{restaurant.name}</li>
        );
      })}
    </ul>
  </RestaurantContainer>
);

export default withRestaurants(RestaurantsLeftNav);
