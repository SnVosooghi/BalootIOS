import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import FixtureAPI from '../Services/FixtureApi'
import ClassinoApi from '../Services/ClassinoApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { ClassinoTypes } from '../Redux/ClassinoRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getRequest, postRequest , refreshPage} from './ClassinoSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : ClassinoApi.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeEvery(ClassinoTypes.GET_REQUEST , getRequest , api),
    takeLatest(ClassinoTypes.POST_REQUEST , postRequest , api),
    takeLatest(ClassinoTypes.REFRESH_PAGE , refreshPage ),
  ])
}
