import Education from "./Education";

const Educations = ({ educations, onDelete }) => {
  return (
    <>
      {educations.map((education) => (
        <Education education={education} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Educations;
