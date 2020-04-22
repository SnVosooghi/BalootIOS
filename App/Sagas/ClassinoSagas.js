import { call, put, select } from 'redux-saga/effects'
import ClassinoActions from '../Redux/ClassinoRedux'
import { path } from 'ramda'
import refreshList from '../assets/RefreshIndexes.js'

export function * getRequest (api, action) {
  let response=null;
  let address=null;
  //this is get request
  if (!action.data){
    address = action.address;
    response = yield call(api.getRequest, address);
  }
  //or post reuqest
  else {
    address = action.address;
    response = yield call(api.postRequest, address , action.data);
  }
  // make the call to the api


  if (response.ok) {
    console.log("repsonse is ok!"+action);
    const responseObject = {data :response.data, getAddress : address}
    // do data conversion here if needed
    yield put(ClassinoActions.getSuccess( responseObject ) )
    yield put(ClassinoActions.refreshPage( address) )
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
//function which map requests to list which needs to be refreshed
export function * refreshPage ( action ){
  let parsed=action.getAddress.replace(/([0-9])\w+/g,'number')
  console.log(parsed);
  const pagesToBeRefreshed=refreshList[parsed];
  for (const pages of pagesToBeRefreshed){
    const postData = yield select(state=>state.postValues[pages])
    yield put(ClassinoActions.getRequest(pages, postData));
  }
}
