import React, { Fragment } from 'react';
import { withRestaurants } from '../providers/RestaurantInfoProvider';
import {RestaurantDetails, ImageDisplay} from '../styles/resteaurantViewStyles';

const RestaurantDetailsView = ({ activeRestaurant }) => {
  const {
    name,
    hasDelivery,
    hasBooking,
    cuisines,
    address,
    image,
    isOpen,
    phone,
  } = activeRestaurant;
  return (
    <RestaurantDetails>
      {Object.keys(activeRestaurant).length === 0 ? (
        <h1>Select a restaurant</h1>
      ) : (
        <Fragment>
          <ImageDisplay>
            <img src={image} alt={name} />
          </ImageDisplay>
          <div>
            <h1>{name}</h1>
            <h3>{address}</h3>

            {hasBooking ? (
              <p>Bookings available</p>
            ) : (
              <p>No bookings</p>
            )}

            {hasDelivery ? (
              <p>Delivery available</p>
            ) : (
              <p>No delivery</p>
            )}

            <span>Cuisines</span>
            <h4>{cuisines}</h4>

            {phone && (
              <Fragment>
                <span>Phone number</span>
                <h4>{phone}</h4>
              </Fragment>
            )}

            <span>Opening hours</span>
            {isOpen ? (
              <h4>Open now</h4>
            ) : (
              <h4>Closed now</h4>
            )}
          </div>
        </Fragment>
      )}
    </RestaurantDetails>
  );
};

export default withRestaurants(RestaurantDetailsView);
