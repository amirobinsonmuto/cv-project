import WorkExperience from "./WorkExperience";

const WorkExperiences = ({ workExperiences }) => {
  return (
    <>
      {workExperiences.map((workExperience) => (
        <WorkExperience
          key={workExperience.id}
          workExperience={workExperience}
        />
      ))}
    </>
  );
};

export default WorkExperiences;
