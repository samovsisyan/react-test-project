import {
  USERS_SUCCESS,
  USERS_REQUEST,
  USERS_FAIL
} from '../actions/users';

const initialState = {
  user: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERS_REQUEST: {
      return { ...state }
    }
    case USERS_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
      }
    }
    case USERS_FAIL: {
      return { ...state }
    }

    default: {
      return state;
    }
  }
}