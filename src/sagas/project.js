import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { getProjectsSuccess, getProjectSuccess, createProjectSuccess } from '../actions/projectAction';
import { database } from '../firebase';
import { API_PROJECTS_PATH } from '../vars/constants';

function getData(path) {
  return database.ref(path).once('value').then(snap => snap.val());
}
function setData(path, data) {
  return database.ref(path).push(data);
}
export function* index() {
  try {
    const response = yield call(getData, API_PROJECTS_PATH);
    yield put(getProjectsSuccess(response));
  } catch (errors) {
    console.log(errors);
  }
}
export function* post(action) {
  try {
    const response = yield call(setData, API_PROJECTS_PATH, action.payload);
    yield put(createProjectSuccess(response));
  } catch (errors) {
    console.log(errors);
  }
}
export function* detail(action) {
  try {
    const response = yield call(getData, `${API_PROJECTS_PATH}/${action.payload}`);
    response.id = action.payload;
    yield put(getProjectSuccess(response));
  } catch (errors) {
    console.log(errors);
  }
}


export function* watchGetProjects() {
  yield takeLatest('GET_PROJECTS', index);
}
export function* watchGetProject() {
  yield takeLatest('GET_PROJECT', detail);
}
export function* watchCreateProject() {
  yield takeLatest('CREATE_PROJECT', post);
}
