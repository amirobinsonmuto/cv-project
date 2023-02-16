import WorkExperience from "./WorkExperience";

const WorkExperiences = ({ workExperiences, onDelete }) => {
  return (
    <>
      {workExperiences.map((workExperience) => (
        <WorkExperience
          key={workExperience.id}
          workExperience={workExperience}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default WorkExperiences;
