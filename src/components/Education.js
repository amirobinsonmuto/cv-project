import { FaTimes } from "react-icons/fa";

const Education = ({ education, onDelete }) => {
  return (
    <div className="flex">
      <h3>{education.program}</h3>
      <h4>{education.school}</h4>
      <p>{education.year}</p>
      <FaTimes
        onClick={() => onDelete(education.id)}
        style={{ color: "red", cursor: "pointer" }}
      />
    </div>
  );
};

export default Education;
