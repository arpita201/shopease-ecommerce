import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartCount,
    cartTotal,
  } = useCart();

  const discount = cartItems.length > 0 ? 20 : 0;
  const tax = cartItems.length > 0 ? 10 : 0;
  const finalTotal = cartTotal - discount + tax;

  return (
    <main className="cart-page">
      <h1>My Cart ({cartCount})</h1>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is empty.</h2>
          <p>Add some products to continue shopping.</p>

          <Link to="/products">
            <button>Go to Products</button>
          </Link>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Category: {item.category}</p>
                  <p>Seller: ShopEase Store</p>

                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>

                <div className="cart-item-controls">
                  <h3>${(item.price * item.quantity).toFixed(2)}</h3>

                  <div className="quantity-controls">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="summary-card">
            <h3>Have a coupon?</h3>
            <input type="text" placeholder="Add coupon" />
            <button>Apply</button>

            <hr />

            <p>Subtotal: ${cartTotal.toFixed(2)}</p>
            <p>Discount: - ${discount.toFixed(2)}</p>
            <p>Tax: + ${tax.toFixed(2)}</p>

            <h2>Total: ${finalTotal.toFixed(2)}</h2>

            <button className="checkout-btn">
              Checkout
            </button>
          </aside>
        </section>
      )}
    </main>
  );
}

export default Cart;