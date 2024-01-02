import "./Header.css";
import { IMAGES } from "../../constants/images";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link
        to={`/`}
        style={{ textDecoration: "none" }}
        className="header__logo"
      >
        <img src={IMAGES.logo} alt="logo" />
      </Link>

      <img className="header__mypage" src={IMAGES.mypage} alt="mypage" />
    </div>
  );
};

export default Header;
