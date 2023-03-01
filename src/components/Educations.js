import PropTypes from "prop-types";
import Education from "./Education";

const Educations = ({ educations }) => {
  return (
    <>
      {educations.map((education) => (
        <Education key={education.id} education={education} />
      ))}
    </>
  );
};

Educations.propTypes = {
  educations: PropTypes.object.isRequired,
};

export default Educations;
