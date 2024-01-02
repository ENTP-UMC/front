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

      <Link
        to={`/mypage`}
        style={{ textDecoration: "none" }}
        className="header__mypage"
      >
        <img src={IMAGES.mypage} alt="mypage" />
      </Link>
    </div>
  );
};

export default Header;
