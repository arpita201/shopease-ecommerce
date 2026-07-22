import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css";

function CheckoutForm() {
const { cartItems, cartTotal, clearCart } = useCart();
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSuccess("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required.";
    } else if (!/^[0-9]{4,10}$/.test(formData.zipCode)) {
      newErrors.zipCode = "Please enter a valid ZIP code.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    if (cartItems.length === 0) {
      setSuccess("");
      setErrors({
        cart: "Your cart is empty. Please add a product before checkout.",
      });
      return;
    }

   setErrors({});

const orderData = {
  id: `SE-${Date.now()}`,
  customer: formData,
  items: cartItems,
  total: cartTotal,
  createdAt: new Date().toLocaleString(),
};

localStorage.setItem("lastOrder", JSON.stringify(orderData));

clearCart();
navigate("/success");
  };

  return (
    <main className="checkout-container">
      <section className="checkout-form">
        <h2>Checkout</h2>
        <p className="checkout-subtitle">
          Enter your shipping details to complete your order.
        </p>

        {success && <div className="success-box">{success}</div>}

        {errors.cart && (
          <div className="checkout-cart-error">{errors.cart}</div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="checkout-form-group">
            <label htmlFor="fullName">Full Name</label>

            <input
              className={errors.fullName ? "checkout-input-error" : ""}
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />

            {errors.fullName && <small>{errors.fullName}</small>}
          </div>

          <div className="checkout-form-group">
            <label htmlFor="email">Email Address</label>

            <input
              className={errors.email ? "checkout-input-error" : ""}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && <small>{errors.email}</small>}
          </div>

          <div className="checkout-form-group">
            <label htmlFor="phone">Phone Number</label>

            <input
              className={errors.phone ? "checkout-input-error" : ""}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            {errors.phone && <small>{errors.phone}</small>}
          </div>

          <div className="checkout-form-group">
            <label htmlFor="address">Address</label>

            <input
              className={errors.address ? "checkout-input-error" : ""}
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />

            {errors.address && <small>{errors.address}</small>}
          </div>

          <div className="checkout-row">
            <div className="checkout-form-group">
              <label htmlFor="city">City</label>

              <input
                className={errors.city ? "checkout-input-error" : ""}
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
              />

              {errors.city && <small>{errors.city}</small>}
            </div>

            <div className="checkout-form-group">
              <label htmlFor="zipCode">ZIP Code</label>

              <input
                className={errors.zipCode ? "checkout-input-error" : ""}
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="Enter ZIP code"
                value={formData.zipCode}
                onChange={handleChange}
              />

              {errors.zipCode && <small>{errors.zipCode}</small>}
            </div>
          </div>

          <button type="submit" className="place-order-button">
            Place Order
          </button>
        </form>
      </section>

      <aside className="order-summary">
        <h2>Order Summary</h2>

        {cartItems.length === 0 ? (
          <p className="empty-summary">Your cart is empty.</p>
        ) : (
          <>
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="summary-product-info">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name || item.title}
                        className="summary-product-image"
                      />
                    )}

                    <div>
                      <h4>{item.name || item.title}</h4>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>

                  <span>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
          </>
        )}
      </aside>
    </main>
  );
}

export default CheckoutForm;