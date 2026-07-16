import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <h4>${product.price}</h4>

      <p>{product.category}</p>

      <p className={product.stock ? "in-stock" : "out-stock"}>
        {product.stock ? "✅ In Stock" : "❌ Out of Stock"}
      </p>

      <div className="card-actions">
        <Link to={`/details/${product.id}`}>
          <button className="details-btn">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;