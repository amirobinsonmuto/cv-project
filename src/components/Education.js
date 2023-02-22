const Education = ({ education }) => {
  return (
    <div className="flex">
      <h4>{education.program}</h4>
      <p>{education.school}</p>
      <p>{education.year}</p>
    </div>
  );
};

export default Education;
