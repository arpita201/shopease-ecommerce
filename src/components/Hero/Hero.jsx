function Hero() {
  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#f5f5f5",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>Welcome to ShopEase</h1>
      <p>Discover the latest fashion at the best prices.</p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Shop Now
      </button>
    </section>
  );
}

export default Hero;