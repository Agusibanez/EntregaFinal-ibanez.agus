import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/" style={{ color: "beige" }}>
          BlueBird
        </Link>
        <ul className="categories">
          <Link to="/">Todas</Link>
          <Link to="/category/Teclados">Teclados</Link>
          <Link to="/category/Mouse">Mouse</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
