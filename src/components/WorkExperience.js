import PropTypes from "prop-types";

const WorkExperience = ({ obj }) => {
  return (
    <div className="work-experience">
      <div className="flex">
        <h3>{obj.position}</h3>
        <p>
          {obj.startDate} - {obj.endDate}
        </p>
      </div>
      <h4>{obj.organization}</h4>
      <p>{obj.description}</p>
    </div>
  );
};

WorkExperience.propTypes = {
  obj: PropTypes.object.isRequired,
};

export default WorkExperience;
