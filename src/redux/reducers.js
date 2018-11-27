import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import types from './types';

export const user = handleActions(
  {
    user_auto_local_storage: (state, { payload }) => payload,
    [types.userAddCount]: (state, { payload }) => state.update('count', v => v + payload.count),
    [types.userRemoveCount]: (state, { payload }) => state.update('count', v => v - payload.count),
    [types.userUpdateAuth]: (state, { payload }) => state.update('data', v => ({ ...v, ...payload })),
  },
  Map({ count: 0, data: {} })
);

export const error = handleActions(
  {
    [types.errorFetchFainl]: (state, { payload }) => state.update('error', v => ({ ...v, ...payload })),
  },
  Map({})
);
