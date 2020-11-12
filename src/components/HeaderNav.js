import React from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';
import CheckboxList from './common/CheckboxList';

const HeaderNav = ({ categoriesList, cuisinesList,}) => (
    <div>
      <CheckboxList
        list={categoriesList}
        title="Categories"
      />
        <CheckboxList
        list={cuisinesList}
        title="Cuisine"
      />
  </div>
);

export default withRestaurants(HeaderNav);
