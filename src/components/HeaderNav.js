import React from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';
import CheckboxList from './common/CheckboxList';
import {HeaderContainer, GridRow, ContentContainer} from '../styles/HeaderStyles';

const HeaderNav = ({ categoriesList, cuisinesList, toggleCategory, toggleCuisine, activeCategories, activeCuisines}) => (
    <ContentContainer>
        <HeaderContainer>
            <GridRow>
                    <CheckboxList
                        list={categoriesList}
                        isColumnLayout = {false}
                        title="Categories"
                        activeItems={activeCategories}
                        toggleSelect={toggleCategory}
                    />
                    <CheckboxList
                        list={cuisinesList.slice(0, 12)}
                        isColumnLayout = {true}
                        title="Cuisine"
                        activeItems={activeCuisines}
                        toggleSelect={toggleCuisine}
                    />
                </GridRow>
    </HeaderContainer>
  </ContentContainer>
);

export default withRestaurants(HeaderNav);
