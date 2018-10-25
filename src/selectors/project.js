// @flow
import { createSelector } from 'reselect';

const projectSelector = state => state.project;

export const selector = createSelector(
  projectSelector,
  (project) => {
    const data = {};
    data.projects = Object.keys(project.projects).map(id => ({ id, data: project.projects[id] }));
    return data;
  },
);
