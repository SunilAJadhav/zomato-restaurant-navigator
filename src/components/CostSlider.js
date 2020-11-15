import React from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';
import Slider from './common/Slider';
//import ReactSlider  './common/Slider';
import { SliderContainer, ListSubhead, RangeContainer, Subheaders } from '../styles/SliderStyles';
import { COST_LOWER_LIMIT, COST_UPPER_LIMIT } from '../constants/constants';

const CostSlider = ({ activeCost, toggleCostChange }) => (
  <SliderContainer>
    <ListSubhead>Cost</ListSubhead>
    <Slider
      minAndMaxRange={[COST_LOWER_LIMIT, COST_UPPER_LIMIT]}
      currentRangeValue={activeCost}
      onRangeChange={toggleCostChange}
    />
    <RangeContainer>
      <Subheaders>$</Subheaders>
      <Subheaders>$$$$</Subheaders>
    </RangeContainer>
  </SliderContainer>
);

export default withRestaurants(CostSlider);
