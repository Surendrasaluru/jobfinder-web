import React from "react";
import flag from "../utils/emojione-v1_flag-for-india.png";
import axios from "axios";
import { JOB_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addJob } from "../utils/jobSlice";

const JobBox = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const job = useSelector((store) => store.job);

  const handleViewDetails = async (jobId) => {
    try {
      const details = await axios.get(
        JOB_URL + "/details/" + jobId,
        {},
        { withCredentials: true }
      );
      //console.log(details?.data?.jobDetails);
      await dispatch(addJob(details?.data?.jobDetails));
      return navigate("/details/" + jobId);
    } catch (err) {
      console.log(err.message);
    }
  };
  const {
    companyName,
    addLogoURL,
    jobLocation,
    _id,
    jobPosition,
    monthlySalary,
    jobType,
  } = data;
  return (
    <div className="border h-[30%] w-[55%] m-auto items-center my-2 py-5 pl-5 shadow-md  shadow-slate-700">
      <h1 className="text-2xl font-mono font-bold my-2">{jobPosition}</h1>
      <div className="flex items-start gap-2">
        <img src={addLogoURL} alt="companylogo" className="rounded-full w-10" />
        <h2 className="text-xl font-sans font-semibold my-2">{companyName}</h2>
      </div>

      <div className="flex justify-stretch">
        <h1 className="text-lg text-gray-700 mr-3"> ₹ {monthlySalary}</h1>
        <p className="text-lg text-gray-700 mr-3">{jobType}</p>
        <div className="flex align-sub">
          <img src={flag} className="rounded-full w-5 mx-2" alt="country" />
          <span className="text-lg text-gray-700 mr-3">{jobLocation}</span>
        </div>
        <button
          className="btn btn-accent mx-3 text-center text-lg"
          onClick={() => handleViewDetails(_id)}
        >
          View Details
        </button>
        <button className="btn btn-accent mx-3 text-center text-lg">
          Edit Job 📝
        </button>
      </div>
    </div>
  );
};

export default JobBox;
