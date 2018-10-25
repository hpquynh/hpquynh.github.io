import { handleActions } from 'redux-actions';
import _ from 'lodash';

export const initialState = {
  isAuth: false,
};

function buildMap(arrayMap) {
  const map = new Map(arrayMap);
  return map.hasOwnProperty('_c') ? map._c : map; // eslint-disable-line
}

export const handleApiActions = ({ defaultState, ...reducer }) => {
  const key = _.keys(reducer)[0];
  const arrMap = [
    ..._.keys(reducer[key]).map(subkey => [
      subkey,
      reducer[key][subkey],
    ]),
  ];
  const result = {};
  result[key] = handleActions(buildMap(arrMap), { ...initialState, ...defaultState });
  return result;
};