import { FaTimes } from "react-icons/fa";

const WorkExperience = ({ workExperience, onDelete }) => {
  return (
    <div className="task work-experience">
      <h3>
        {workExperience.position}
        <FaTimes
          onClick={() => onDelete(workExperience.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <h4>{workExperience.organization}</h4>
      <p>
        {workExperience.startDate} - {workExperience.endDate}
      </p>
      <p>{workExperience.description}</p>
    </div>
  );
};

export default WorkExperience;
