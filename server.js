const express = require("express");
const path = require("path");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files (your existing code here)
app.use(express.static(path.join(__dirname, "public"), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith(".woff2")) {
            res.setHeader("Content-Type", "font/woff2");
        } else if (filePath.endsWith(".woff")) {
            res.setHeader("Content-Type", "font/woff");
        } else if (filePath.endsWith(".ttf")) {
            res.setHeader("Content-Type", "font/ttf");
        }
    }
}));

// 1. Create Razorpay order
app.post("/create-order", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: req.body.amount,
            currency: req.body.currency,
            receipt: "receipt_order_" + Date.now(),
        };

        const order = await instance.orders.create(options);
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: "Failed to create order" });
    }
});

// 2. Verify Razorpay payment
app.post("/verify-payment", (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    const hmac = crypto.createHmac("sha256", key_secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generated_signature = hmac.digest("hex");

    if (generated_signature === razorpay_signature) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});