import React, { useState } from "react";

const inputStyle =
  "block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm";

function WorkXp({ onWorkChange, onClear }) {
  const [workExperience, setWorkExperience] = useState([
    {
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      showContent: true,
      addedContent: false,
    },
  ]);

  const handleChange = (index, field, value) => {
    setWorkExperience((prevExperience) => {
      const newExperience = [...prevExperience];
      newExperience[index][field] = value;
      return newExperience;
    });
  };

  const handleAddClick = (index) => {
    setWorkExperience((prevExperience) => {
      const newExperience = [...prevExperience];
      newExperience[index].showContent = true;
      newExperience[index].addedContent = true;

      // Ajoutez une nouvelle expérience de travail identique
      newExperience.push({
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        showContent: true,
        addedContent: false,
      });

      return newExperience;
    });
  };

  const handleRemoveClick = (index) => {
    setWorkExperience((prevExperience) => {
      const newExperience = [...prevExperience];
      newExperience.splice(index, 1);
      return newExperience;
    });
  };
  const handleClear = () => {
    setWorkExperience([
      {
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        showContent: true,
        addedContent: false,
      },
    ]);
    onClear();
  };

  // Appeler la fonction onWorkChange pour mettre à jour l'état parent
  onWorkChange(workExperience);

  return (
    <div className="mt-10 ">
      <h1 className="ml-32 text-3xl font-bold underline underline-offset-2">
        Work experience
      </h1>

      {workExperience.map((experience, index) => (
        <div
          key={index}
          className={` p-5 bg-white shadow-xl rounded-xl flex flex-col gap-5 m-10 w-80 ml-32 ${
            experience.showContent ? "" : "hidden"
          }`}
        >
          <input
            className={inputStyle}
            type="text"
            value={experience.position}
            onChange={(e) => handleChange(index, "position", e.target.value)}
            placeholder="Position"
          />
          <input
            className={inputStyle}
            type="text"
            value={experience.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            placeholder="Company"
          />
          <input
            className={inputStyle}
            type="date"
            value={experience.startDate}
            onChange={(e) => handleChange(index, "startDate", e.target.value)}
            placeholder="Start Date"
          />
          <input
            className={inputStyle}
            type="date"
            value={experience.endDate}
            onChange={(e) => handleChange(index, "endDate", e.target.value)}
            placeholder="End Date"
          />
          <input
            className={`${inputStyle} h-36`}
            type="text"
            value={experience.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            placeholder="Description"
          />
          <button
            onClick={() => {
              experience.addedContent
                ? handleRemoveClick(index)
                : handleAddClick(index);
            }}
            className={`p-2 text-white bg-${
              experience.addedContent ? "black" : "black"
            } border rounded-md shadow-sm`}
          >
            {experience.addedContent ? "Remove" : "Add"}
          </button>
          <button
            onClick={handleClear}
            className="p-2 text-black bg-gray-300 shadow-xl rounded-xl"
          >
            Clear
          </button>
        </div>
      ))}
    </div>
  );
}

export default WorkXp;
