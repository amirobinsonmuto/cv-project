const WorkExperience = ({ workExperience }) => {
  return (
    <div className="work-experience">
      <div className="flex">
        <h3>{workExperience.position}</h3>
        <p>
          {workExperience.startDate} - {workExperience.endDate}
        </p>
      </div>
      <h4>{workExperience.organization}</h4>
      <p>{workExperience.description}</p>
    </div>
  );
};

export default WorkExperience;
