import { createActions } from 'redux-actions';

export const {
  login,
  loginSuccess,
} = createActions({
  LOGIN: payload => payload,
  LOGIN_SUCCESS: undefined,
});
