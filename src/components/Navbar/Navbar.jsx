import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

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
          alignItems: "center",
          fontWeight: "500",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <Link
          to="/cart"
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          Cart

          {cartCount > 0 && (
            <span
              style={{
                minWidth: "22px",
                height: "22px",
                padding: "0 6px",
                borderRadius: "999px",
                background: "#127FFF",
                color: "#fff",
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
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;