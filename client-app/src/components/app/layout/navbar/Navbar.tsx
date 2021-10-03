import Style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={Style.NavContainer}>
      <div>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <div></div>
      <div>
        <button>Create Activity</button>
      </div>
    </div>
  );
};

export default NavBar;
