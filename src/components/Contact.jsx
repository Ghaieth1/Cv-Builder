import { useState } from "react";

const inputStyle =
  "block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm";

const Contact = ({ onInputChange, onClear }) => {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  });

  const handleChange = (field, value) => {
    setContactInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
    onInputChange({ ...contactInfo, [field]: value });
  };

  const handleClear = () => {
    setContactInfo({
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    });
    onClear();
  };
  return (
    <div className="flex flex-col gap-5 p-5 ml-32 bg-white shadow-xl rounded-xl w-80">
      <input
        className={inputStyle}
        type="text"
        value={contactInfo.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
        placeholder="First Name"
      />
      <input
        className={inputStyle}
        type="text"
        value={contactInfo.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
        placeholder="Last Name"
      />
      <input
        className={inputStyle}
        type="text"
        value={contactInfo.title}
        onChange={(e) => handleChange("title", e.target.value)}
        placeholder="Title"
      />

      <input
        className={inputStyle}
        type="text"
        value={contactInfo.address}
        onChange={(e) => handleChange("address", e.target.value)}
        placeholder="Address"
      />
      <input
        className={inputStyle}
        type="number"
        value={contactInfo.phoneNumber}
        onChange={(e) => handleChange("phoneNumber", e.target.value)}
        placeholder="Phone Number"
      />
      <input
        className={inputStyle}
        type="email"
        value={contactInfo.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="Email"
      />
      <input
        className={`${inputStyle} h-36`}
        type="text"
        value={contactInfo.description}
        onChange={(e) => handleChange("description", e.target.value)}
        placeholder="Description"
      />
      <button
        onClick={handleClear}
        className="p-2 text-black bg-gray-300 shadow-xl rounded-xl"
      >
        Clear
      </button>
    </div>
  );
};

export default Contact;
