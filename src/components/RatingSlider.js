import React from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';
import Slider from './common/Slider';
import { SliderContainer, ListSubhead, RangeContainer, Subheaders } from '../styles/SliderStyles';
import { RATING_LOWER_LIMIT, RATING_UPPER_LIMIT  } from '../constants/constants';

const RatingSlider = ({ activeRating, toggleRatingChange }) => (
  <SliderContainer>
    <ListSubhead>Rating</ListSubhead>
    <Slider
      minAndMaxRange={[RATING_LOWER_LIMIT, RATING_UPPER_LIMIT]}
      currentRangeValue={activeRating}
      onRangeChange={toggleRatingChange}
    />
    <RangeContainer>
      <Subheaders>1</Subheaders>
      <Subheaders>5</Subheaders>
    </RangeContainer>
  </SliderContainer>
);

export default withRestaurants(RatingSlider);
