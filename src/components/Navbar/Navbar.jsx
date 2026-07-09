import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          color: "#127FFF",
          fontWeight: "700",
          margin: 0,
        }}
      >
        ShopEase
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          fontWeight: "500",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;