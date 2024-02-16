// DisplayEducation.jsx
import React from "react";

function DisplayEducation({ educationInfo }) {
  return (
    <div>
      <h1 className="text-center text-xl mt-5 underline underline-offset-[14px] decoration-slate-300 decoration-4">
        {" "}
        Education Background
      </h1>
      {educationInfo.map((info, index) => (
        <div key={index}>
          <br />
          <div className="mt-5 ml-4">
            <div className="flex flex-row ">
              <div>
                <strong>
                  {info.universityName
                    ? `${info.universityName} | ${info.studyName}`
                    : ""}
                </strong>
                <br />
                {info.startYear && info.endDate
                  ? `${info.startYear} / ${info.endDate}`
                  : ""}
              </div>
              <p className="ml-44 break-words">{info.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayEducation;
