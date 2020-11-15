import React, { Fragment } from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';
import {
  RestaurantDetails, 
  ImageDisplay, 
  Heading1, 
  Heading3,
  Heading4,
  OpenStatus,
  CloseStatus,
  WrongICon,
  RightICon,
  PhoneContainer,
  OpenCloseContainer,
  TextDetailedViewHeader
} from '../styles/resteaurantViewStyles';

const RestaurantDetailsView = ({ activeRestaurant }) => {
  console.log(activeRestaurant);
  return (
    <RestaurantDetails>
      {Object.keys(activeRestaurant).length === 0 ? (
        <h1>Please select a restaurant...</h1>
      ) : (
        <Fragment>
          <ImageDisplay>
            <img src={activeRestaurant.image} alt={activeRestaurant.name} />
          </ImageDisplay>
          <div>
            <Heading1>{activeRestaurant.name}</Heading1>
            <Heading3>{activeRestaurant.address}</Heading3>

            {activeRestaurant.hasBooking ? (
              <p><RightICon>&#10004;</RightICon> Bookings available</p>
            ) : (
              <p><WrongICon>&#10006;</WrongICon>No bookings</p>
            )}

            {activeRestaurant.hasDelivery ? (
              <p><RightICon>&#10004;</RightICon> Delivery available</p>
            ) : (
              <p><WrongICon>&#10006;</WrongICon>No delivery</p>
            )}

            <TextDetailedViewHeader>Cuisines</TextDetailedViewHeader>
            <Heading4>{activeRestaurant.cuisines}</Heading4>

            {activeRestaurant.phone && (
              <Fragment>
                <TextDetailedViewHeader>Phone number</TextDetailedViewHeader>
                <Heading4>{activeRestaurant.phone}</Heading4>
              </Fragment>
            )}
            {/*Todo: Need to add logic for extracting today from date-timing string */}  
            <TextDetailedViewHeader>Opening hours</TextDetailedViewHeader>
            <OpenCloseContainer>{ activeRestaurant.timings }
            {activeRestaurant.isOpen ? (
              <OpenStatus> Open now</OpenStatus>
            ) : (
              <CloseStatus> Closed now</CloseStatus>
            )}
            </OpenCloseContainer>
          </div>
        </Fragment>
      )}
    </RestaurantDetails>
  );
};

export default withRestaurants(RestaurantDetailsView);
