import PropTypes from "prop-types";

const PersonalInfo = ({ personalInfo }) => {
  return (
    <div className="resume-personal-info">
      <h1>{personalInfo.name}</h1>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>
    </div>
  );
};

PersonalInfo.propTypes = {
  personalInfo: PropTypes.object.isRequired,
};

export default PersonalInfo;
