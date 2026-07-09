function Cart({ cartItems, removeFromCart, updateQty }) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const discount = cartItems.length > 0 ? 20 : 0;
  const tax = cartItems.length > 0 ? 10 : 0;
  const total = subtotal - discount + tax;

  return (
    <main className="cart-page">
      <h1>My Cart ({cartItems.length})</h1>

      <section className="cart-layout">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <h2>Your cart is empty.</h2>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div>
                  <h3>{item.name}</h3>
                  <p>Category: {item.category}</p>
                  <p>Seller: ShopEase Store</p>

                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>

                <div>
                  <h3>${item.price * item.qty}</h3>

                  <select
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, e.target.value)}
                  >
                    <option value="1">Qty: 1</option>
                    <option value="2">Qty: 2</option>
                    <option value="3">Qty: 3</option>
                  </select>
                </div>
              </div>
            ))
          )}
        </div>

        <aside className="summary-card">
          <h3>Have a coupon?</h3>
          <input type="text" placeholder="Add coupon" />
          <button>Apply</button>

          <hr />

          <p>Subtotal: ${subtotal}</p>
          <p>Discount: - ${discount}</p>
          <p>Tax: + ${tax}</p>

          <h2>Total: ${total}</h2>
          <button className="checkout-btn">Checkout</button>
        </aside>
      </section>
    </main>
  );
}

export default Cart;