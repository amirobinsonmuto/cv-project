import { FaTimes } from "react-icons/fa";

const WorkExperience = ({ workExperience, onDelete }) => {
  return (
    <div className="work-experience">
      <div className="flex">
        <h3>{workExperience.position}</h3>
        <p>
          {workExperience.startDate} - {workExperience.endDate}
        </p>
        <FaTimes
          onClick={() => onDelete(workExperience.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </div>
      <h4>{workExperience.organization}</h4>
      <p>{workExperience.description}</p>
    </div>
  );
};

export default WorkExperience;
