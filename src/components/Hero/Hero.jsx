import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      style={{
        padding: "90px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #f3f8ff, #ffffff)",
      }}
    >
      <h1 style={{ fontSize: "52px", marginBottom: "12px" }}>
        Welcome to ShopEase
      </h1>

      <p style={{ fontSize: "18px", color: "#555" }}>
        Discover quality products at the best prices.
      </p>

      <Link to="/products">
        <button
          style={{
            marginTop: "25px",
            padding: "14px 36px",
            background: "#127FFF",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Shop Now
        </button>
      </Link>
    </section>
  );
}

export default Hero;