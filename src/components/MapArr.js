import PropTypes from "prop-types";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

const MapArr = ({ arr, type }) => {
  if (type === "workExperience") {
    return (
      <>
        {arr.map((obj) => (
          <WorkExperience key={obj.id} obj={obj} />
        ))}
      </>
    );
  }
  return (
    <>
      {arr.map((obj) => (
        <Education key={obj.id} obj={obj} />
      ))}
    </>
  );
};

MapArr.propTypes = {
  arr: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default MapArr;
