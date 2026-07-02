function Cart() {
  return (
    <main className="cart-page">
      <h1>My Cart (3)</h1>

      <section className="cart-layout">
        <div className="cart-items">
          {[
            "T-shirts with multiple colors",
            "Mens Long Sleeve T-shirt",
            "GoPro HERO6 Camera",
          ].map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-img">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
                  alt={item}
                />
              </div>

              <div>
                <h3>{item}</h3>
                <p>Size: Medium, Color: Blue, Material: Plastic</p>
                <p>Seller: Artel Market</p>
                <button>Remove</button>
                <button style={{ marginLeft: "10px" }}>Save for later</button>
              </div>

              <div>
                <h3>$78.99</h3>
                <select>
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        <aside className="summary-card">
          <h3>Have a coupon?</h3>
          <input type="text" placeholder="Add coupon" />
          <button>Apply</button>

          <hr />

          <p>Subtotal: $1403.97</p>
          <p>Discount: - $60.00</p>
          <p>Tax: + $14.00</p>

          <h2>Total: $1357.97</h2>
          <button className="checkout-btn">Checkout</button>
        </aside>
      </section>
    </main>
  );
}

export default Cart;