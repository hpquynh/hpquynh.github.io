import { handleApiActions } from './baseReducer';

export default handleApiActions({
  login: {
    LOGIN_SUCCESS: state => ({
      ...state,
      isAuth: true,
      allCookies: {
        ...state.allCookies,
        is_auth: true,
      },
    }),
    LOGIN_FAILURE: state => ({
      ...state,
      allCookies: {
        ...state.allCookies,
        is_auth: false,
      },
      isAuth: false,
    }),
  },
  defaultState: {
    isAuth: false,
  },
});
