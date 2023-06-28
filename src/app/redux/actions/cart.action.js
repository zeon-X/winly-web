import axiosInstance from "../helpers/axios";
import { cartConstants } from "./constants";
import Swal from "sweetalert2";

export const getCartItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.CART_GET_REQUEST });
      const res = await axiosInstance.get(`/user/cart/get`);

      if (res.status === 200) {
        dispatch({
          type: cartConstants.CART_GET_SUCCESS,
          payload: res.data.cart,
        });
      }
    } catch (error) {
      dispatch({
        type: cartConstants.CART_GET_FAILURE,
        payload: error.response,
      });
    }
  };
};

export const addToCart = (item, qty) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const cartData = {
        cartItems: {
          product: item._id,
          price: item.price,
          qty: qty,
        },
      };
      const res = await axiosInstance.post(`/user/cart/add`, cartData);

      if (res.status === 201) {
        dispatch({
          type: cartConstants.ADD_TO_CART_SUCCESS,
          payload: res.data,
        });
        dispatch(getCartItems());
        Swal.fire({
          icon: "info",
          title: "Cart Updated!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: cartConstants.ADD_TO_CART_FAILURE,
        payload: data,
      });
    }
  };
};

export const removeCart = (requestID) => {
  return async (dispatch) => {
    dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
    const res = await axiosInstance.post(`/cart/remove`, requestID);
    if (res.status === 202) {
      dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
      dispatch(getCartItems());
    } else {
      const { error } = res.data;
      dispatch({
        type: cartConstants.REMOVE_CART_ITEM_FAILURE,
        payload: { error },
      });
    }
  };
};
