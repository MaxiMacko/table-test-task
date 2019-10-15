import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

import testData from './constants/testData';

export const changeStatusAction = createAction('CHANGE_STATUS',
  payload => payload
);

export const changeFilterValueAction = createAction('CHANGE_FILTER_VALUE');
export const resetFilterAction = createAction('RESET_FILTER_ACTION');

const initialState = fromJS({
  filterValue: '',
  userData: testData,
});

const reducer = handleActions({
  [changeStatusAction]: (state, { payload }) => {
    const currentUserData = state.get('userData');
    const plainCurrentUserData = currentUserData.toJS();
    const userById = plainCurrentUserData.find(user => user.id === payload.id);
    const updatedUser = { ...userById, status: payload.status};
    const userIndex = plainCurrentUserData.findIndex(user => user.id === payload.id);
    const result = Object.assign(plainCurrentUserData, { [userIndex]: updatedUser });
    return state.set('userData', fromJS(result))
  },
  [changeFilterValueAction]: (state, { payload }) => state.set('filterValue', payload),
  [resetFilterAction]: state => state.set('filterValue', ''),
}, initialState);

export default reducer;
