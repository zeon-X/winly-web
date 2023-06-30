"use client";
import { authConstant } from "../actions/constants";

const initState = {
  token: null,
  user: {},
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case authConstant.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstant.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstant.LOGIN_FAILURE:
      state = {
        ...initState,
        error: action.payload,
      };
      break;
    case authConstant.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstant.LOGOUT_SUCCESS:
      state = {
        ...initState,
      };
      break;
    case authConstant.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case authConstant.SIGNUP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstant.SIGNUP_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case authConstant.SIGNUP_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
  }

  return state;
};
