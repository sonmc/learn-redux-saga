import API from "../../config/axiosInstance";
import { put, takeLatest } from 'redux-saga/effects'

import { generalActionsFailure, generalActionsFetching, generalActionsSuccess } from '../actions'
import { ACTION_TYPES } from "../actions/actionTypes";
import { ROUTER_NAME } from "../../routers/typeRouter";

function* getAll({ type, payload }) {
  try {
    yield put(generalActionsFetching(ACTION_TYPES.INIT));
    const response = yield API.get('https://jsonplaceholder.typicode.com/todos');
    console.log("response.data", response);
    if (!response.data) {
      yield put(generalActionsFailure(ACTION_TYPES.INIT, true))
    }
    yield put(generalActionsSuccess(ACTION_TYPES.INIT, response.data));
  } catch (error) {
    console.log(error);
    yield put(generalActionsFailure(ACTION_TYPES.INIT, error))
  }

}


export default function* userSaga() {
  yield takeLatest(ACTION_TYPES.INIT, getAll)
}
