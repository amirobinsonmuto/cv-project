import PropTypes from "prop-types";
import AddEducation from "./AddEducation";

const RenderEducationForms = ({
  educationForms,
  onAdd,
  onDelete,
  onUpdate,
}) => {
  return (
    <>
      {educationForms.map((educationForm) => (
        <AddEducation
          id={educationForm.id}
          key={educationForm.id}
          onAdd={onAdd}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};

RenderEducationForms.propTypes = {
  educationForms: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default RenderEducationForms;
