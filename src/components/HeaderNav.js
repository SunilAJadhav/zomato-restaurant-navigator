import React from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';
import CheckboxList from './common/CheckboxList';
import {HeaderContainer, SortList} from '../styles/HeaderStyles';

const HeaderNav = ({ categoriesList, cuisinesList,}) => (
    <HeaderContainer>
          <SortList>
                <CheckboxList
                    list={categoriesList}
                    title="Categories"
                />
                <CheckboxList
                    list={cuisinesList}
                    title="Cuisine"
                />
            </SortList>
  </HeaderContainer>
);

export default withRestaurants(HeaderNav);
