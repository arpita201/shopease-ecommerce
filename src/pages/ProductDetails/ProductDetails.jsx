function ProductDetails() {
  return (
    <main className="details-page">
      <section className="details-card">

        <div className="details-img">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
            alt="Product"
          />
        </div>

        <div className="details-info">
          <p className="stock">In stock</p>

          <h1>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h1>

          <p>  7.5 · 154 orders · Free Shipping</p>

          <div className="price-box">
            <h2>$98.00</h2>
            <p>50-100 pcs</p>
          </div>

          <p><strong>Price:</strong> Negotiable</p>
          <p><strong>Type:</strong> Classic shoes</p>
          <p><strong>Material:</strong> Plastic material</p>
          <p><strong>Design:</strong> Modern nice</p>

          <button>Send inquiry</button>
        </div>

        <aside className="seller-card">
          <h3>Supplier</h3>
          <p>Guanjoi Trading LLC</p>
          <p>Germany, Berlin</p>

          <button>Send inquiry</button>

          <button className="outline-btn">
            Seller profile
          </button>
        </aside>

      </section>

      <section className="description-section">
        <h2>Description</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
    </main>
  );
}

export default ProductDetails;