import { useParams } from "react-router-dom";
import productsData from "../../data/products.json";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const product = productsData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="details-page">
        <h2>Product not found</h2>
      </main>
    );
  }

  return (
    <main className="details-page">
      <section className="details-card">
        <div className="details-img">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <p className={product.stock ? "stock" : "out-stock"}>
            {product.stock ? "In Stock" : "Out of Stock"}
          </p>

          <h1>{product.name}</h1>

          <p>⭐ 7.5 · 154 orders · Free Shipping</p>

          <div className="price-box">
            <h2>${product.price}</h2>
            <p>Best price available</p>
          </div>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Description:</strong> {product.description}
          </p>
<button onClick={() => addToCart(product)}>
  Add to Cart
</button>
        </div>

        <aside className="seller-card">
          <h3>Supplier</h3>
          <p>ShopEase Trading LLC</p>
          <p>Verified Seller</p>

          <button>Send inquiry</button>

          <button className="outline-btn">Seller profile</button>
        </aside>
      </section>

      <section className="description-section">
        <h2>Product Description</h2>

        <p>{product.description}</p>
      </section>
    </main>
  );
}

export default ProductDetails;