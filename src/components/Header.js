import Button from "./Button";

const Header = () => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>CV Builder</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
