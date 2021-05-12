
import { generalActionsFailure, generalTypeFetching, generalTypePending, generalTypeSuccess } from '../actions'
import { ACTION_TYPES } from "../actions/actionTypes";

export const initState = {
  pending: false,
  loading: false,
  data: null,
  hasErrors: null
};

export const userReducers = (state = initState, { type, data }) => {
  debugger
  switch (type) {
    case generalTypeFetching(ACTION_TYPES.INIT):

      return {
        ...state,
        loading: true,
        pending: false
      }

    case generalTypeSuccess(ACTION_TYPES.INIT):
      return {
        ...state,
        loading: false,
        data: data,
        hasErrors: null,
        pending: false
      }
    case generalActionsFailure(ACTION_TYPES.INIT):

      return {
        ...state,
        loading: false,
        data: null,
        hasErrors: data,
        pending: false
      }

    case generalTypePending(ACTION_TYPES.INIT):
      return {
        ...state,
        loading: false,
        data: null,
        hasErrors: null,
        pending: true

      }
    default:
      return Object.assign({}, state)
  }

}
