import PropTypes from "prop-types";
import AddWorkExperience from "./AddWorkExperience";

const RenderWorkExperienceForms = ({
  workExperienceForms,
  onAdd,
  onDelete,
  onUpdate,
}) => {
  return (
    <>
      {workExperienceForms.map((workExperienceForm) => (
        <AddWorkExperience
          id={workExperienceForm.id}
          key={workExperienceForm.id}
          onAdd={onAdd}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};

RenderWorkExperienceForms.propTypes = {
  workExperienceForms: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default RenderWorkExperienceForms;
