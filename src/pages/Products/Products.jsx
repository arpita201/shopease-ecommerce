const products = [
  "Canon Camera EOS 2000",
  "GoPro HERO6 Camera",
  "Apple Watch Series",
  "Gaming Headset",
  "Laptop Pro",
  "Smartphone",
];

function Products() {
  return (
    <main className="listing-page">
      <aside className="filter-sidebar">
        <h3>Category</h3>
        <p>Mobile accessory</p>
        <p>Electronics</p>
        <p>Smartphones</p>
        <p>Modern tech</p>

        <h3>Brands</h3>
        <p>Samsung</p>
        <p>Apple</p>
        <p>Huawei</p>
        <p>Lenovo</p>
      </aside>

      <section className="listing-content">
        <h2>12,911 items in Mobile accessory</h2>

        <div className="listing-products">
          {products.map((item, index) => (
            <div className="listing-card" key={index}>
              <div className="listing-img">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
                  alt="Product"
                />
              </div>

              <div>
                <h3>{item}</h3>
                <h2>$998.00</h2>
                <p>7.5 · 154 orders · Free Shipping</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button>View details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;