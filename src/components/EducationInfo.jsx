import { useState } from "react";

const inputStyle =
  "block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm";

function EducationInfo({ onEducationChange, onClear }) {
  const [educationInfo, setEducationInfo] = useState([
    {
      studyName: "",
      universityName: "",
      startYear: "",
      endDate: "",
      description: "",
      showContent: true,
      addedContent: false,
    },
  ]);

  const handleChange = (index, field, value) => {
    setEducationInfo((prevInfo) => {
      const newInfo = [...prevInfo];
      newInfo[index][field] = value;
      return newInfo;
    });
  };

  const handleAddClick = (index) => {
    setEducationInfo((prevInfo) => {
      const newInfo = [...prevInfo];
      newInfo[index].showContent = true;
      newInfo[index].addedContent = true;

      // Ajoutez une nouvelle éducation identique
      newInfo.push({
        studyName: "",
        universityName: "",
        startYear: "",
        endDate: "",
        description: "",
        showContent: true,
        addedContent: false,
      });

      return newInfo;
    });
  };

  const handleRemoveClick = (index) => {
    setEducationInfo((prevInfo) => {
      const newInfo = [...prevInfo];
      newInfo.splice(index, 1);
      return newInfo;
    });
  };

  // Appel de la fonction de rappel parent avec les changements
  onEducationChange(educationInfo);

  const handleClear = () => {
    setEducationInfo([
      {
        studyName: "",
        universityName: "",
        startYear: "",
        endDate: "",
        description: "",
        showContent: true,
        addedContent: false,
      },
    ]);
    onClear();
  };

  return (
    <div>
      <h1 className="ml-32 text-3xl font-bold underline underline-offset-2">
        Education Info
      </h1>

      {educationInfo.map((info, index) => (
        <div
          key={index}
          className={` bg-white shadow-xl rounded-xl p-5 flex flex-col gap-5 m-10 w-80 ml-32 ${
            info.showContent ? "" : "hidden"
          }`}
        >
          <input
            className={inputStyle}
            type="text"
            value={info.studyName}
            onChange={(e) => handleChange(index, "studyName", e.target.value)}
            placeholder="Study Name"
          />
          <input
            className={inputStyle}
            type="text"
            value={info.universityName}
            onChange={(e) =>
              handleChange(index, "universityName", e.target.value)
            }
            placeholder="University Name"
          />
          <input
            className={inputStyle}
            type="number"
            min="1900"
            max="2099"
            step="1"
            value={info.startYear}
            onChange={(e) => handleChange(index, "startYear", e.target.value)}
            placeholder="Start Year"
          />
          <input
            className={inputStyle}
            type="number"
            min="1900"
            max="2099"
            step="1"
            value={info.endDate}
            onChange={(e) => handleChange(index, "endDate", e.target.value)}
            placeholder="End Year"
          />
          <input
            className={`${inputStyle} h-36`}
            type="text"
            value={info.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            placeholder="Description"
          />
          <button
            onClick={() => {
              info.addedContent
                ? handleRemoveClick(index)
                : handleAddClick(index);
            }}
            className={`p-2 text-white bg-${
              info.addedContent ? "black" : "black"
            } border rounded-md shadow-sm`}
          >
            {info.addedContent ? "Remove" : "Add"}
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

export default EducationInfo;
