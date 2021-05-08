export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser (user) {
  return {
    type: SET_USER,
    user: {
      id: user.sub,
      name: user.name
    }
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}
