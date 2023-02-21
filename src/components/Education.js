const Education = ({ education }) => {
  return (
    <div className="flex">
      <h3>{education.program}</h3>
      <h4>{education.school}</h4>
      <p>{education.year}</p>
    </div>
  );
};

export default Education;
