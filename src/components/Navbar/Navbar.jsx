import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
    window.location.reload();
  };

  const navStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    transition: "0.3s",
    background: isActive ? "#127FFF" : "transparent",
    color: isActive ? "#fff" : "#333",
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <NavLink
        to="/"
        style={{ textDecoration: "none" }}
      >
        <h2
          style={{
            color: "#127FFF",
            margin: 0,
            fontWeight: "700",
          }}
        >
          ShopEase
        </h2>
      </NavLink>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <NavLink to="/" style={navStyle}>
          Home
        </NavLink>

        <NavLink to="/products" style={navStyle}>
          Products
        </NavLink>

        <NavLink to="/login" style={navStyle}>
          Login
        </NavLink>

        <NavLink to="/signup" style={navStyle}>
          Signup
        </NavLink>

        <NavLink
          to="/cart"
          style={navStyle}
        >
          Cart
          {cartCount > 0 && (
            <span
              style={{
                marginLeft: "6px",
                background: "#fff",
                color: "#127FFF",
                borderRadius: "50%",
                minWidth: "20px",
                height: "20px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              {cartCount}
            </span>
          )}
        </NavLink>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            style={{
              border: "none",
              background: "#dc3545",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;