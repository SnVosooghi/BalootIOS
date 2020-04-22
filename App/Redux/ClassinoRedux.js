import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setToken: ['token'],
  getRequest: ['address', 'data'],
  postRequest: ['postAddress' , 'data'],
  getSuccess: ['data'],
  getFailure: null,
  refreshPage:['getAddress']
})

export const ClassinoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: true,
  error: null,
  data:{
      'desk/dashboard':null,
      'products/list':null,
      'products/listFilters':null
  },
  dates:{},
  token:'',
  postValues:{
    'products/list':null
  }
})

/* ------------- Selectors ------------- */

export const CLassinoSelectors = {
  selectAvatar: state => state.github.avatar
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const tokenSet = (state, token) =>
  state.merge({ token : 'Bearer '+token.token })
export const requestGet = (state, address , data ) =>
  state.merge({ fetching: true, error : null   })
export const requestPost = ( state , postAddress , data) =>
  state.merge({ fetching: true, error : null, getAddress : postAddress  })
// successful avatar lookup
export const success = (state, action ) => {
  const info=action.data
  return state.merge({ fetching: false,
                       error : null,
                       data : Object.assign({}, state.data, {[info.getAddress] : info.data.data}),
                       dates : Object.assign({}, state.dates, {[info.getAddress] : Date.now()})
                    })
}
// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true, getAddress: null, data: null })
//need to refresh another screem
export const refreshPage = (state, getAddress) => {
  return state;
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TOKEN]: tokenSet,
  [Types.GET_REQUEST]: requestGet,
  [Types.POST_REQUEST]: requestPost,
  [Types.GET_SUCCESS]: success,
  [Types.GET_FAILURE]: failure,
  [Types.REFRESH_PAGE] : refreshPage
})
