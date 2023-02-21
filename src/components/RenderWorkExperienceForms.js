import AddWorkExperience from "./AddWorkExperience";

const RenderWorkExperienceForms = ({
  workExperienceForms,
  onAdd,
  onDelete,
}) => {
  return (
    <>
      {workExperienceForms.map((workExperienceForm) => (
        <AddWorkExperience
          id={workExperienceForm.id}
          key={workExperienceForm.id}
          onAdd={onAdd}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default RenderWorkExperienceForms;
