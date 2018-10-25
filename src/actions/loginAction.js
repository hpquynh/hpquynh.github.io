import { createActions } from 'redux-actions';

export const {
  login,
  loginSuccess,
  loginFailure,
} = createActions({
  LOGIN: payload => payload,
  LOGIN_SUCCESS: undefined,
  LOGIN_FAILURE: undefined,
});
