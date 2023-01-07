import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { BsFillTrashFill, BsPersonCircle } from "react-icons/bs";
import { getApprovedResumes, deleteApprovedResume } from "../actions/Resumes";

const ApprovedCandidates = () => {
  const dispatch = useDispatch();
  const { resumes, isLoading } = useSelector(
    (state) => state.approveResumeReducer
  );

  const tableHeadders = [
    "Name",
    "Applying for",
    "Key Skills",
    "Comments",
    "Resume",
    "Action",
  ];

  const deleteResume = (id) => {
    dispatch(deleteApprovedResume(id));

    toast.success("resume deleted");
  };

  useEffect(() => {
    dispatch(getApprovedResumes());
  }, [dispatch]);

  if (!resumes.length && !isLoading)
    return (
      <div className="my-10 flex justify-center">
        <p>No resumes yet...</p>
      </div>
    );

  return (
    <>
      <div className="pt-3 pb-10">
        <div className="mx-auto">
          <div className="py-4 lg:pt-4 lg:col-span-2">
            <div className="flex justify-center">
              <a href="" className="text-2xl font-bold text-[#6C63FF]">
                Resumes
              </a>
            </div>
          </div>
          {isLoading ? (
            <div className=" flex justify-center p-4">
              <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-4">
              <table className="w-full text-left text-gray-500">
                <thead className="text-sm md:text-lg text-white bg-[#6C63FF]">
                  <tr>
                    {tableHeadders.map((item, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="py-3 px-6 font-semibold border-r"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {resumes?.map((resume, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b border-gray-300 hover:bg-gray-200 "
                    >
                      <th
                        scope="row"
                        className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <span>
                          <BsPersonCircle className="h-7 w-7 text-gray-500" />
                        </span>
                        <div className="pl-3">
                          <div className="text-base text-gray-600 font-semibold">
                            {resume?.fullName}
                          </div>
                          <div className="font-normal text-gray-700">
                            {resume?.emailID}
                          </div>
                        </div>
                      </th>
                      <td className="py-4 px-6">{resume?.applyingFor}</td>
                      <td className="py-4 px-6">{resume?.key_skills}</td>
                      <td className="py-4 px-6 max-w-sm">{resume?.comments}</td>
                      <td className="py-4 px-6">
                        <a
                          href={resume?.resumeURL}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-blue-500 hover:underline md:mx-1 my-1"
                        >
                          View resume
                        </a>
                      </td>
                      <td className="py-4 px-6">
                        <div>
                          <button
                            type="button"
                            onClick={() => deleteResume(resume?._id)}
                            className="text-xl text-red-500 md:ml-3 my-1"
                          >
                            <BsFillTrashFill />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ApprovedCandidates;
