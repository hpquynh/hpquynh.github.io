import { handleApiActions } from './baseReducer';

export default handleApiActions({
  project: {
    GET_PROJECTS_SUCCESS: (state, action) => ({
      projects: action.payload,
    }),
    GET_PROJECT_SUCCESS: (state, action) => ({
      ...state,
      project: action.payload,
    }),
  },
  defaultState: {
    projects: {},
  },
});
