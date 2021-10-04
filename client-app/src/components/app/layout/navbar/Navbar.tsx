import { Button } from "react-bootstrap";
import Style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={Style.NavContainer}>
      <div className={Style.MenuItem}>
        <img src="/assets/logo.png" alt="logo" />
        <span>Reactivities</span>
      </div>
      <div className={Style.MenuItem}>
        <span>Activity</span>
      </div>
      <div className={Style.MenuItem}>
        <Button variant="success">Create Activity</Button>{" "}
      </div>
    </div>
  );
};

export default NavBar;
