import {combineReducers} from 'redux'
import {reducer as FormReducer} from 'redux-form'
import runtime from './runtime'
import user from './signIn'

export default combineReducers({
  runtime,
  user,
  form: FormReducer,
})
