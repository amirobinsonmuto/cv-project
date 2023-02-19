import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
    </header>
  );
};

export default Header;
