import { call, put, takeLatest } from 'redux-saga/effects';
import { getProjectsSuccess } from '../actions/projectAction';
import { database } from '../firebase';
import { API_PROJECTS_PATH } from '../vars/constants';

function getList(path) {
  return database.ref(path).once('value').then(snap => snap.val());
}
export function* index() {
  try {
    const response = yield call(getList, API_PROJECTS_PATH);
    yield put(getProjectsSuccess(response));
  } catch (errors) {
    console.log(errors);
  }
}


export function* watchGetProjects() {
  yield takeLatest('GET_PROJECTS', index);
}
