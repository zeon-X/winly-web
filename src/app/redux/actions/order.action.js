import axiosInstance from "../helpers/axios";
import { orderConstant } from "./constants";
import Swal from "sweetalert2";

export const orderPlace = (order) => {
  return async (dispatch) => {
    try {
      dispatch({ type: orderConstant.ORDER_PLACE_REQUEST });

      const res = await axiosInstance.post(`/user/order/place`, order);
      if (res.status === 201) {
        dispatch({
          type: orderConstant.ORDER_PLACE_SUCCESS,
          payload: res.data,
        });
        Swal.fire({
          icon: "success",
          title: "Order Placed!",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          window.location.replace("/profile/active-tickets");
        });
      }
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: orderConstant.ORDER_PLACE_FAILURE,
        payload: error,
      });
    }
  };
};
