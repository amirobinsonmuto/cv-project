import PropTypes from "prop-types";

import AddWorkExperience from "./AddWorkExperience";
import AddEducation from "./AddEducation";

const RenderForms = ({ type, forms, onAdd, onDelete, onUpdate }) => {
  if (type === "workExperience") {
    return (
      <>
        {forms.map((form) => (
          <AddWorkExperience
            id={form.id}
            key={form.id}
            onAdd={onAdd}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </>
    );
  }
  return (
    <>
      {forms.map((form) => (
        <AddEducation
          id={form.id}
          key={form.id}
          onAdd={onAdd}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};

RenderForms.propTypes = {
  type: PropTypes.string.isRequired,
  forms: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default RenderForms;
