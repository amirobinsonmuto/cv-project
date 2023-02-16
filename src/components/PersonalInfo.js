const PersonalInfo = ({ personalInfo }) => {
  return (
    <div>
      <h2>{personalInfo.name}</h2>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>
    </div>
  );
};

export default PersonalInfo;
