import {SIGNIN_ERROR} from '../constants/index'
import Immutable from 'immutable'

var defaultState = Immutable.fromJS({
  errorMessage: ''
})

function userReducer (state = defaultState, action) {
  switch (action.type) {
    case SIGNIN_ERROR:
      if (action.payload === 'auth/user-not-found') {
        state.errorMessage = 'User doesn\'t exist!'
        return state;
      } else if (action.payload === 'auth/wrong-password') {
        state.errorMessage = 'There was an error logging in. Please try again.'
        return state;
      }
    default:
      return state
  }
}

export default userReducer
