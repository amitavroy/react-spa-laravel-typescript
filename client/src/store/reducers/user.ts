const initialUserState = {
  currentUser: {},
};

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case "USER_SET":
      return { ...state, currentUser: action.payload };

    case "USER_GET":
      return state.currentUser;

    default:
      return state;
  }
};

export default user;
