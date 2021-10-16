import { Button } from "react-bootstrap";
import Style from "./Navbar.module.css";

interface Prop {
  setCreateMode: () => void;
}

const NavBar = ({ setCreateMode }: Prop) => {
  const onCreateActivityHandler = () => {
    setCreateMode();
  };
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
        <button onClick={onCreateActivityHandler}>Create Activity</button>
      </div>
    </div>
  );
};

export default NavBar;
