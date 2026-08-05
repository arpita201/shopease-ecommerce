import { Link } from "react-router-dom";

function OrderSuccess() {
  let savedOrder = null;

  try {
    const orderFromStorage = localStorage.getItem("lastOrder");

    savedOrder = orderFromStorage
      ? JSON.parse(orderFromStorage)
      : null;
  } catch (error) {
    console.error("Failed to read order information:", error);
  }

  const orderId =
    savedOrder?._id ||
    savedOrder?.id ||
    "Not available";

  const customerName =
    savedOrder?.customer?.fullName ||
    savedOrder?.customerName ||
    "Customer";

  const totalAmount = Number(
    savedOrder?.totalPrice ??
    savedOrder?.total ??
    0
  );

  const orderDate = savedOrder?.createdAt
    ? new Date(savedOrder.createdAt).toLocaleString()
    : "Not available";

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

        {savedOrder ? (
          <>
            <h3 style={{ color: "#127FFF" }}>
              Order ID: {orderId}
            </h3>

            <p>
              Customer:{" "}
              <strong>{customerName}</strong>
            </p>

            <p>
              Total:{" "}
              <strong>
                ${totalAmount.toFixed(2)}
              </strong>
            </p>

            <p>Status: {savedOrder.status || "Pending"}</p>

            <p>Order Date: {orderDate}</p>
          </>
        ) : (
          <p>
            Order details could not be found, but your order may
            still have been submitted successfully.
          </p>
        )}

        <Link to="/">
          <button
            type="button"
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