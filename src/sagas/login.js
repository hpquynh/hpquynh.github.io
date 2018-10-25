import { call, put, takeLatest } from 'redux-saga/effects';
import { loginFailure, loginSuccess } from '../actions/loginAction';
import { auth } from '../firebase';

export function* login(action) {
  try {
    yield call([auth, auth.signInWithEmailAndPassword], ...Object.values(action.payload));
    yield put(loginSuccess());
  } catch (errors) {
    yield put(loginFailure());
  }
}

export function* watchLogin() {
  yield takeLatest('LOGIN', login);
}
