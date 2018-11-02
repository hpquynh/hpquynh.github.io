import { call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess } from '../actions/loginAction';
import { auth } from '../firebase';

export function* login(action) {
  try {
    yield call([auth, auth.signInWithEmailAndPassword], ...Object.values(action.payload));
    yield put(loginSuccess());
  } catch (errors) {
    console.log(errors);
  }
}

export function* watchLogin() {
  yield takeLatest('LOGIN', login);
}
