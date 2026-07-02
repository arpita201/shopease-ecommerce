import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        background: "#ffffff",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>ShopEase</h2>

      <div style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
<Link to="/products">Products</Link>
<Link to="/details">Details</Link>
<Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;