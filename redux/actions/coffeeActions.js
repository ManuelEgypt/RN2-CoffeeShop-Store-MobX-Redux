import * as actionTypes from "./types";
import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const coffeeShops = res.data;
      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: coffeeShops
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return {
    type: actionTypes.SET_LOADING
  };
};
