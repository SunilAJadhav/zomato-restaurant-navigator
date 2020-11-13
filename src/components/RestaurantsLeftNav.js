import React from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';

const RestaurantsLeftNav = ({ restaurantList, toggleActiveRestaurant, activeCost, activeRating, selectedRestaurant }) => (
  <section>
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
  </section>
);

export default withRestaurants(RestaurantsLeftNav);
