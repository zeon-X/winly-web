"use client";
import axiosInstance from "@app/redux/helpers/axios";
// import axiosInstance from "../../../helpers/axios";
import { campaignConst } from "./constants";

export const getCampaign = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: campaignConst.CAMPAIGN_REQUEST });

      const res = await axiosInstance.get(`/campaign/get`);

      if (res.status === 200) {
        dispatch({
          type: campaignConst.CAMPAIGN_SUCCESS,
          payload: res.data.campaigns,
        });
      }
    } catch (error) {
      const { data } = error?.response;
      dispatch({
        type: campaignConst.CAMPAIGN_FAILURE,
        payload: data,
      });
    }
  };
};
