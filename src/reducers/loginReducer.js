import { handleApiActions } from './baseReducer';

export default handleApiActions({
  login: {
    LOGIN_SUCCESS: state => ({
      ...state,
      allCookies: {
        ...state.allCookies,
        is_auth: true,
      },
      isAuth: true,
    }),
  },
  defaultState: {
    isAuth: false,
  },
});
