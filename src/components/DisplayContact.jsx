function DisplayContact({ contactInfo }) {
  const addressIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );

  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );

  return (
    <div>
      <div id="cvContent" className="bg-slate-500 text-center text-white ">
        <ul>
          <li className="text-4xl pt-5 font-bold">
            {contactInfo.firstName} {contactInfo.lastName}
          </li>
          <li className="pt-2 mb-6"> {contactInfo.title}</li>
          <div className="flex place-content-around gap-5 pb-8 ">
            <li className="flex gap-2">
              {contactInfo.address ? (
                <>
                  {addressIcon} {contactInfo.address}
                </>
              ) : null}
            </li>
            <li className="flex gap-2">
              {contactInfo.phoneNumber ? (
                <>
                  {phoneIcon} {contactInfo.phoneNumber}
                </>
              ) : null}
            </li>
            <li className="flex gap-2">
              {contactInfo.email ? (
                <>
                  {emailIcon} {contactInfo.email}
                </>
              ) : null}
            </li>
          </div>
        </ul>
      </div>
      <div>
        <h1 className="text-center text-xl mt-2 underline underline-offset-[14px] decoration-slate-300 decoration-4">
          About Me
        </h1>
        <p className="text-center mt-5">{contactInfo.description}</p>
      </div>
    </div>
  );
}

export default DisplayContact;
