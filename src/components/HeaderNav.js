import React from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';
import CheckboxList from './common/CheckboxList';
import {HeaderContainer, SortList, CategoriesList} from '../styles/HeaderStyles';

const HeaderNav = ({ categoriesList, cuisinesList,}) => (
    <HeaderContainer>
          <SortList>
              <CategoriesList>
                    <CheckboxList
                        list={categoriesList}
                        isColumnLayout = {false}
                        title="Categories"
                    />
                </CategoriesList>
                <CheckboxList
                    list={cuisinesList}
                    isColumnLayout = {true}
                    title="Cuisine"
                />
            </SortList>
  </HeaderContainer>
);

export default withRestaurants(HeaderNav);
