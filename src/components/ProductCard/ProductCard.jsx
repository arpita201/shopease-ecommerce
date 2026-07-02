function ProductCard({ product }) {
  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #ddd",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "180px",
          height: "180px",
          objectFit: "cover",
        }}
      />

      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;