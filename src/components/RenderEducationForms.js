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

export default RenderEducationForms;
