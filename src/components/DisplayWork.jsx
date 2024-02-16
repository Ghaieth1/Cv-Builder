import React from "react";

function DisplayWork({ workExperience }) {
  return (
    <div>
      <h1 className="text-center text-xl mt-5 underline underline-offset-[14px] decoration-slate-300 decoration-4">
        Professional Experience
      </h1>
      {workExperience.map((experience, index) => (
        <div key={index}>
          <br />
          <div className="mt-5 ml-4">
            <div className="flex flex-row ">
              <div>
                <strong>
                  {experience.company ? `${experience.company} |` : ""}{" "}
                  {experience.position}
                </strong>
                <br />
                {experience.startDate && experience.endDate
                  ? `${experience.startDate} / ${experience.endDate}`
                  : ""}
              </div>
              <p className="ml-44 break-words">{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayWork;
