import { SEARCH_BEGIN, SEARCH_ERROR, SEARCH_SUCCESS } from "../actions";

const initialState = {
  isLoading: false,
  character: '',
}

const characterReducer = (state = initialState, action) => {
 switch (action.type){
  case SEARCH_BEGIN:
    return {
      ...state,
      isLoading: true,
    }
  case SEARCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      character: action.character
    }
  case SEARCH_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.error,
    }
  default:
    return state}
};

export default characterReducer
