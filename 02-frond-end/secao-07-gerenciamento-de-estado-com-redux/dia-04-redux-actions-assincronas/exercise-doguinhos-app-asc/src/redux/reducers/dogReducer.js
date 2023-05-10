import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCCESSFUL } from "../actions";

const initialState = {
  isFetching: false,
  imageUrl: '',
  errorMessage: '',
};

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        imageUrl: '',
        errorMessage: '',
      }
    case REQUEST_SUCCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageUrl: action.payload,
        errorMessage: '',
      }
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        imageUrl: '',
        errorMessage: action.payload,
      }
    default:
      return state
  }

}

export default dogReducer;
