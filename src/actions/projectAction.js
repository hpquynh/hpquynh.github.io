// @flow
import { createActions } from 'redux-actions';

export const {
  getProjects,
  getProject,
  getProjectsSuccess,
  getProjectSuccess,
} = createActions({
  GET_PROJECTS: undefined,
  GET_PROJECT: (id: string) => id,
  GET_PROJECTS_SUCCESS: payload => payload,
  GET_PROJECT_SUCCESS: payload => payload,
});
