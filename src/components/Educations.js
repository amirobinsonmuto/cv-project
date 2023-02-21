import Education from "./Education";

const Educations = ({ educations }) => {
  return (
    <>
      {educations.map((education) => (
        <Education key={education.id} education={education} />
      ))}
    </>
  );
};

export default Educations;
