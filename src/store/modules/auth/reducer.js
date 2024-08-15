import api from "../../../services/axios";
import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: null,
  user: {},
  isLoading: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;

      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete api.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_UPDATED_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          nome: action.payload.nome,
          email: action.payload.email
        },
        isLoading: false
      };
    }


    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
}