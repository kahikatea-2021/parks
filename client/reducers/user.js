// import { getUser } from '../auth-utils'
import { SET_USER, CLEAR_USER } from '../actions/user'

const emptyUser = {
  id: null,
  username: '',
  isAdmin: false,
  gardenId: null
}

export default function user (state = emptyUser, action) {
  switch (action.type) {
    case SET_USER:
      return state

    case CLEAR_USER:
      return emptyUser

    default:
      return state
  }
}
