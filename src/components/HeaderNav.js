import React from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';

const HeaderNav = ({ categoriesList}) => (
    <div>
    {categoriesList.map(({ id, name }) => {
      return (
          <div id={id}>{name}</div>
      );
    })}
  </div>
);

export default withRestaurants(HeaderNav);
