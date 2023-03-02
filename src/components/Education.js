import PropTypes from "prop-types";

const Education = ({ obj }) => {
  return (
    <div className="flex">
      <h4>{obj.program}</h4>
      <p>{obj.school}</p>
      <p>
        {obj.startDate} - {obj.endDate}
      </p>
    </div>
  );
};

Education.propTypes = {
  obj: PropTypes.object.isRequired,
};

export default Education;
