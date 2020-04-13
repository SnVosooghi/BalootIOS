import { call, put, select } from 'redux-saga/effects'
import { path } from 'ramda'
import ClassinoActions from '../Redux/ClassinoRedux'

export function * getRequest (api, action) {
  const { getAddress } = action
  const state = yield select();
  // make the call to the api

  const response = yield call(api.getRequest, getAddress)

  if (response.ok) {
    const action = {data :response.data, getAddress : getAddress}
    // do data conversion here if needed
    yield put(ClassinoActions.getSuccess( action ) )
  } else {
    yield put(ClassinoActions.getFailure())
  }
}

export function * postRequest (api, action) {
  const { data , postAddress } = action
  // make the call to the api
  const response = yield call(api.postRequest, postAddress , data)
  if (response.ok) {
    const action = {data :response.data, getAddress : postAddress}
    // do data conversion here if needed
    yield put(ClassinoActions.getSuccess( action ) )
  } else {
    yield put(ClassinoActions.getFailure())
  }
}
