import { combineReducers } from "redux";

import jobsReducer from "./jobs";
import resumeReducer from "./resumes";
import approveResumeReducer from './approvedResume'

const rootReducer = combineReducers({ jobsReducer, resumeReducer, approveResumeReducer });

export default rootReducer
