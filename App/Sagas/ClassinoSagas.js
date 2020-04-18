import { call, put, select } from 'redux-saga/effects'
import ClassinoActions from '../Redux/ClassinoRedux'
import { path } from 'ramda'
import refreshList from '../assets/RefreshIndexes.js'

export function * getRequest (api, action) {
  const { getAddress } = action
  const state = yield select();
  // make the call to the api

  const response = yield call(api.getRequest, getAddress)

  if (response.ok) {
    const action = {data :response.data, getAddress : getAddress}
    // do data conversion here if needed
    yield put(ClassinoActions.getSuccess( action ) )
    yield put(ClassinoActions.refreshPage( getAddress) )
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

export function * refreshPage ( action ){
  console.log(action.getAddress);
  const pagesToBeRefreshed=refreshList[action.getAddress];
  for (const pages of pagesToBeRefreshed)
    yield put(ClassinoActions.getRequest(pages));
}
