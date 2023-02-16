import { FaTimes } from "react-icons/fa";

const WorkExperience = ({ workExperience, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {workExperience.position}{" "}
        <FaTimes
          onClick={() => onDelete(workExperience.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <h4>{workExperience.organization}</h4>
      <p>{workExperience.description}</p>
      <p>{workExperience.startDate}</p>
      <p>{workExperience.endDate}</p>
    </div>
  );
};

export default WorkExperience;
