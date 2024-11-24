import React from "react";
import { useSelector } from "react-redux";
import flag from "../utils/emojione-v1_flag-for-india.png";

const JobDetails = () => {
  const jobData = useSelector((store) => store.job);
  console.log(jobData);
  const {
    jobLocation,
    jobPosition,
    companyName,
    addLogoURL,
    monthlySalary,
    jobType,
    aboutCompany,
    jobDescription,
    skillsRequired,
  } = jobData;
  //console.log(skillsRequired);
  return (
    <div>
      <div className="border h-[30%] w-[55%] m-auto items-center my-2 py-5 pl-5 shadow-md  shadow-slate-700">
        <h1 className="text-2xl font-mono font-bold my-2">{jobPosition}</h1>
        <div className="flex items-start gap-3">
          <img
            src={addLogoURL}
            alt="companylogo"
            className="rounded-full w-10"
          />
          <h2 className="text-xl font-sans font-semibold my-2">
            {companyName}
          </h2>
          <div className="flex justify-stretch">
            <h1 className="text-lg text-gray-700 mr-3"> ₹ {monthlySalary}</h1>
            <p className="text-lg text-gray-700 mr-3">{jobType}</p>
            <div className="flex align-sub">
              <img src={flag} className="rounded-full w-5 mx-2" alt="country" />
              <span className="text-lg text-gray-700 mr-3">{jobLocation}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="flex my-2">
              {skillsRequired.map((eachskill) => (
                <h2 className="my-2 mx-4 text-xl font-sans border py-2 px-4 text-center rounded-md bg-orange-300 font-semibold ">
                  {eachskill}
                </h2>
              ))}
            </div>
            <h2 className="text-xl font-sans font-semibold my-2">
              {aboutCompany}
            </h2>
            <h2 className="text-xl font-sans font-semibold my-2">
              {jobDescription}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
