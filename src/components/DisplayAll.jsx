import DisplayContact from "./DisplayContact";
import DisplayEducation from "./DisplayEducation";
import DisplayWork from "./DisplayWork";

function DisplayAll({ contactInfo, workExperience, educationInfo }) {
  return (
    <div>
      {contactInfo && <DisplayContact contactInfo={contactInfo} />}

      {Array.isArray(workExperience) && workExperience.length > 0 && (
        <DisplayWork workExperience={workExperience} />
      )}

      {Array.isArray(educationInfo) && educationInfo.length > 0 && (
        <DisplayEducation educationInfo={educationInfo} />
      )}
    </div>
  );
}

export default DisplayAll;
