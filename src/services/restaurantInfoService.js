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
  