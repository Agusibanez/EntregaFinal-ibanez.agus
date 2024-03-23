import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";
import { menuNavigation } from "../../Router/menuNavegation";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/" style={{ color: "withe" }}>
          BlueBird
        </Link>

        <ul className="categories">
          {menuNavigation.map(({ id, text, path }) => (
            <Link key={id} to={path}>
              {text}
            </Link>
          ))}
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
