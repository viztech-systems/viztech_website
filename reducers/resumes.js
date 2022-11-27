import {
  FETCH_RESUMES,
  CREATE_RESUME,
  DELETE_RESUME,
  START_LOADING,
  END_LOADING
} from "../actions/actionTypes";

const initialState = { isLoading: true, resumes:[] };

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case FETCH_RESUMES:
      return { ...state, resumes: action.payload};
    case CREATE_RESUME:
      return { ...state, resumes:[...state.resumes, action.payload] };
    case DELETE_RESUME:
      return { ...state, resumes: state.resumes.filter((resume)=> resume._id != action.payload) };
    default:
      return state;
  }
};

export default resumeReducer;
