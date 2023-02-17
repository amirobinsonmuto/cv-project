import Education from "./Education";

const Educations = ({ educations }) => {
  return (
    <>
      {educations.map((education) => (
        <Education education={education} />
      ))}
    </>
  );
};

export default Educations;
