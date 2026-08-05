const express = require("express");
const Order = require("../models/Order");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new order
router.post("/", protect, async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      items,
      totalPrice,
    } = req.body;

    if (
      !customerName ||
      !customerEmail ||
      !items ||
      items.length === 0 ||
      totalPrice === undefined
    ) {
      return res.status(400).json({
        message: "All order information is required.",
      });
    }

    const order = await Order.create({
      user: req.user.userId,
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim(),
      items,
      totalPrice,
      status: "Pending",
    });

    res.status(201).json({
      message: "Order placed successfully.",
      order,
    });
  } catch (error) {
    console.error("Order creation error:", error);

    res.status(500).json({
      message: "Failed to place order.",
      error: error.message,
    });
  }
});

module.exports = router;