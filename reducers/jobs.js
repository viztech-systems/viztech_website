import {FETCH_ALL_JOBS, FETCH_JOB, CREATE_JOB, UPDATE_JOB, DELETE_JOB, START_LOADING, END_LOADING} from '../actions/actionTypes'

const initialState = { isLoading: true, jobs:[] };

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case FETCH_JOB:
      return { ...state, jobs: action.payload };
    case FETCH_ALL_JOBS:
      return { ...state, jobs: action.payload };
    case CREATE_JOB:
      return { ...state, jobs:[...state.jobs, action.payload] };
    case UPDATE_JOB:
      return { ...state, jobs: state.jobs.map((job)=> job._id == action.payload._id ? action.payload : job) }
    case DELETE_JOB:
        return { ...state, jobs: state.jobs.filter((job)=> job._id != action.payload) }
    default:
      return state;
  }
};

export default jobsReducer;
