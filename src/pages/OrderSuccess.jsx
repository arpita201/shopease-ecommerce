import { Link } from "react-router-dom";

function OrderSuccess() {
  const savedOrder = JSON.parse(localStorage.getItem("lastOrder"));

  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        background: "#f5f7fb",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "18px",
          textAlign: "center",
          boxShadow: "0 12px 35px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ fontSize: "60px" }}>✅</div>

        <h1>Order Confirmed!</h1>

        <p>Thank you for shopping with ShopEase.</p>

        {savedOrder && (
          <>
            <h3 style={{ color: "#127FFF" }}>
              Order ID: {savedOrder.id}
            </h3>

            <p>
              Customer: <strong>{savedOrder.customer.fullName}</strong>
            </p>

            <p>
              Total: <strong>${savedOrder.total.toFixed(2)}</strong>
            </p>

            <p>Order Date: {savedOrder.createdAt}</p>
          </>
        )}

        <Link to="/">
          <button
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "14px",
              background: "#127FFF",
              color: "#ffffff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Continue Shopping
          </button>
        </Link>
      </section>
    </main>
  );
}

export default OrderSuccess;