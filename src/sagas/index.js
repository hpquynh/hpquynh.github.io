import { all, fork } from 'redux-saga/effects';
import { watchLogin } from './login';
import { watchGetProjects, watchGetProject, watchCreateProject } from './project';

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchGetProjects),
    fork(watchGetProject),
    fork(watchCreateProject),
  ]);
}
