import * as axiosAPI from "../axios";

import {
  FETCH_RESUMES,
  CREATE_RESUME,
  DELETE_RESUME,
  FETCH_APPROVED_RESUMES,
  APPROVE_RESUME,
  DELETE_APPROVED_RESUME,
  START_LOADING,
  END_LOADING,
} from "./actionTypes";

export const getResumes = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await axiosAPI.fetchResumes();

    dispatch({ type: FETCH_RESUMES, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("FETCH_RESUMES error:", error);
  }
};

export const createResume = (resume) => async (dispatch) => {
  try {
    const { data } = await axiosAPI.createResume(resume);

    dispatch({ type: CREATE_RESUME, payload: data });
  } catch (error) {
    console.log("CREATE_RESUME error:", error);
  }
};

export const deleteResume = (id) => async (dispatch) => {
  try {
    await axiosAPI.deleteResume(id);

    dispatch({ type: DELETE_RESUME, payload: id });
  } catch (error) {
    console.log("DELETE_RESUME error:", error);
  }
};

export const getApprovedResumes = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await axiosAPI.fetchApprovedResumes();

    dispatch({ type: FETCH_APPROVED_RESUMES, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("FETCH_APPROVED_RESUMES error:", error);
  }
};

export const ApproveResume = (resume) => async (dispatch) => {

  try {
    const { data } = await axiosAPI.approveResume(resume);

    dispatch({ type: APPROVE_RESUME, payload: data });
  } catch (error) {
    console.log("APPROVE_RESUME error:", error);
  }
};

export const deleteApprovedResume = (id) => async (dispatch) => {
  try {
    await axiosAPI.deleteApprovedResume(id);

    dispatch({ type: DELETE_APPROVED_RESUME, payload: id });
  } catch (error) {
    console.log("DELETE_APPROVED_RESUME error:", error);
  }
};
