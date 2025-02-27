import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-continer">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;