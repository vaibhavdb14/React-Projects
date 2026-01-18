import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">GreenWorld</h1>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Plants</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
