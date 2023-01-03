import {
    FETCH_APPROVED_RESUMES,
    APPROVE_RESUME,
    DELETE_APPROVED_RESUME,
    START_LOADING,
    END_LOADING
  } from "../actions/actionTypes";
  
  const initialState = { isLoading: true, resumes:[] };
  
  const approveResumeReducer = (state = initialState, action) => {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true }
      case END_LOADING:
        return { ...state, isLoading: false }
      case FETCH_APPROVED_RESUMES:
        return { ...state, resumes: action.payload};
      case APPROVE_RESUME:
        return { ...state, resumes:[...state.resumes, action.payload] };
      case DELETE_APPROVED_RESUME:
        return { ...state, resumes: state.resumes.filter((resume)=> resume._id != action.payload) };
      default:
        return state;
    }
  };
  
  export default approveResumeReducer;
  