import { Link } from "react-router-dom";
import {
  headerContainer,
  headerLink,
  navLink,
  navLinkContainer,
} from "../../styles/style";
import { routes } from "../../utils/constants";

const Header = () => {
  return (
    <div className={headerContainer}>
      <Link className={headerLink} to="/">
        USER - ROLE APP
      </Link>
      <div className={navLinkContainer}>
        <Link className={navLink} to={routes.user}>
          User
        </Link>
        <Link className={navLink} to={routes.role}>
          Role
        </Link>
      </div>
    </div>
  );
};

export default Header;
