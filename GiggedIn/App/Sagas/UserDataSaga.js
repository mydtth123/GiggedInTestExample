import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import  UserDataTypes  from '../Redux/UserDataRedux'


export function * getUserData(api, action){
    // make the call to the api
    const response = yield call(api.getUserData)
    console.log('response ===',response)
    if (response.ok) {
      const userData = path(['data'], response)
      console.log('response ===',userData)
      // do data conversion here if needed
      yield put(UserDataTypes.setUserData(userData))
    } else {
      yield put(UserDataTypes.userFailure())
    }

}