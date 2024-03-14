import HandleMode from "./components/HandleMode";

const Header = () => {
  return (
    <>
      <div className="header-app">
        <div className="logo">
          <h1>
            <a href="#">devfinder</a>
          </h1>
        </div>
        <div className="mode">
          <HandleMode />
        </div>
      </div>
    </>
  );
};

export default Header;
