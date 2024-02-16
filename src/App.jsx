// App.jsx
import { useState } from "react";
import Contact from "./components/Contact";
import EducationInfo from "./components/EducationInfo";
import WorkXp from "./components/WorkXp";
import LoadExample from "./components/LoadExample";
import DisplayAll from "./components/DisplayAll";

function App() {
  const [exampleDataLoaded, setExampleDataLoaded] = useState(false);
  const [contactInfo, setContactInfo] = useState({});
  const [workExperience, setWorkExperience] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);

  // Définir les données d'exemple ici
  const exampleData = {
    contactInfo: {
      firstName: "John",
      lastName: "Doe",
      title: "Software Developer",
      address: "123 Main St, City",
      phoneNumber: "123-456-7890",
      email: "john.doe@example.com",
      description: "Passionate about coding!",
    },
    workExperience: [
      {
        jobTitle: "Frontend Developer",
        company: "TechCo",
        startDate: "2020-01-01",
        endDate: "2022-01-01",
        description: "Developed user interfaces for web applications.",
      },
    ],
    educationInfo: [
      {
        degree: "Bachelor's in Computer Science",
        school: "University XYZ",
        graduationYear: "2019",
      },
    ],
  };

  const loadExampleData = (exampleData) => {
    setExampleDataLoaded(true);
    setContactInfo(exampleData.contactInfo);
    setWorkExperience(exampleData.workExperience);
    setEducationInfo(exampleData.educationInfo);
  };

  const handleClearContact = () => {
    setContactInfo({});
  };

  const handleClearWork = () => {
    setWorkExperience([]);
  };

  const handleClearEducation = () => {
    setEducationInfo([]);
  };

  return (
    <div className="bg-gray-200">
      <h1 className="p-5 text-3xl text-center text-white bg-black">
        CV Application
      </h1>
      <div className="flex justify-center mt-5 gap-7">
        <div className="m-10 left-Side">
          <LoadExample
            onLoadExample={loadExampleData}
            onDisplayContact={setContactInfo}
            onDisplayWork={setWorkExperience}
            onDisplayEducation={setEducationInfo}
            exampleData={exampleData} // Passer exampleData comme propriété
          />
          <Contact
            onInputChange={(info) => setContactInfo(info)}
            onClear={handleClearContact}
          />
          <WorkXp
            onWorkChange={(experience) => setWorkExperience(experience)}
            onClear={handleClearWork}
          />
          <EducationInfo
            onEducationChange={(info) => setEducationInfo(info)}
            onClear={handleClearEducation}
          />
        </div>
        <div className="bg-white shadow-xl rounded-xl flex-col border-4 border-black m-10 right-Side w-[865px] h-[1044px]">
          <DisplayAll
            contactInfo={contactInfo}
            workExperience={workExperience}
            educationInfo={educationInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
