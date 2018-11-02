// @flow
import { createActions } from 'redux-actions';

export const {
  getProjects,
  getProject,
  createProject,
  getProjectsSuccess,
  getProjectSuccess,
  createProjectSuccess,
} = createActions({
  GET_PROJECTS: undefined,
  GET_PROJECT: (id: string) => id,
  CREATE_PROJECT: undefined,
  GET_PROJECTS_SUCCESS: payload => payload,
  GET_PROJECT_SUCCESS: payload => payload,
  CREATE_PROJECT_SUCCESS: undefined,
});
