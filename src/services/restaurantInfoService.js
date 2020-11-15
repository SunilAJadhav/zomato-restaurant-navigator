import axios from 'axios';
import { API_ROOT_URL, API_KEY, CITY_ID } from '../constants/constants';


const categoriesInfo = ({ categories }) => categories.map(({ categories }) => ({
    id: categories.id,
    name: categories.name,
  }));

export async function getCategories() {
    const categories = await axios(`${API_ROOT_URL}categories?city_id=${CITY_ID}`, {
      headers: { 'user-key': API_KEY }
    });
    return categoriesInfo(categories.data);
  }

  const cuisinesInfo = ({ cuisines }) => cuisines.map(({ cuisine }) => ({
    id: cuisine.cuisine_id,
    name: cuisine.cuisine_name,
  }));

export async function getCuisines() {
    const cuisines = await axios(`${API_ROOT_URL}cuisines?city_id=${CITY_ID}`, {
      headers: { 'user-key': API_KEY }
    });
    return cuisinesInfo(cuisines.data);
  }

  const restaurantsInfo = restaurants => restaurants.map(({ restaurant }) => ({
    id: restaurant.id,
    name: restaurant.name,
    hasDelivery: restaurant.has_online_delivery,
    hasBooking: restaurant.has_table_booking,
    cuisines: restaurant.cuisines,
    timings: restaurant.timings,
    address: restaurant.location.address,
    image: restaurant.featured_image,
    price: restaurant.price_range,
    rating: Number(restaurant.user_rating.aggregate_rating),
    isOpen: restaurant.is_delivering_now,
    phone: restaurant.phone_numbers,
  }));

  function addCuisinesAndCategories(cuisines = [], categories = []) {
    let cuisinesAndCategories = '';
    if (cuisines.length) {
      cuisinesAndCategories += '&cuisines=';
      cuisines.map((cuisine, index) => cuisinesAndCategories += `${index > 0 ? ',' : ''}${cuisine}`);
    }
    if (categories.length) {
      cuisinesAndCategories += '&category=';
      categories.map((category, index) => cuisinesAndCategories += `${index > 0 ? ',' : ''}${category}`);
    }
    return cuisinesAndCategories;
  }

  export async function getListOfRestaurants(cuisines, categories) {
    const restaurants =  await axios(
      `${API_ROOT_URL}search?entity_type=city&entity_id=${CITY_ID}&start=${1}${addCuisinesAndCategories(cuisines, categories)}`,
      { headers: { 'user-key': API_KEY } },
    ).then(response => response.data.restaurants);
    return restaurantsInfo(restaurants);
  }