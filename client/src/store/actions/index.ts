export const setUser = user => {
  return { type: 'USER_SET', payload: user }
}

export const getUser = () => {
  return { type: 'USER_GET' }
}
