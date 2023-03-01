import PropTypes from "prop-types";
import WorkExperience from "./WorkExperience";

const WorkExperiences = ({ workExperiences }) => {
  return (
    <>
      {workExperiences.map((workExperience) => (
        <WorkExperience
          key={workExperience.id}
          workExperience={workExperience}
        />
      ))}
    </>
  );
};

WorkExperiences.propTypes = {
  workExperiences: PropTypes.array.isRequired,
};

export default WorkExperiences;
