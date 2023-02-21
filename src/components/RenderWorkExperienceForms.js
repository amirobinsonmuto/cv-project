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

export default RenderWorkExperienceForms;
