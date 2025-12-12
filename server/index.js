require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const MenuItem = require("./models/MenuItem");
const Order = require("./models/Order");

const app = express();

app.use(cors()); // allow all origins (fine for homework)
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error:", err));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// GET /api/menu - fetch all menu items
app.get("/api/menu", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    console.error("Error fetching menu:", err);
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

// POST /api/orders - save an order
app.post("/api/orders", async (req, res) => {
  try {
    const { items, total, customerName, customerEmail } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ error: "Order must have items" });
    }

    const order = new Order({ items, total, customerName, customerEmail });
    await order.save();

    res.status(201).json({ message: "Order saved", orderId: order._id });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ error: "Failed to save order" });
  }
});

// OPTIONAL: seed menu items once via this route
app.post("/api/seed-menu", async (req, res) => {
  try {
    const count = await MenuItem.countDocuments();
    if (count > 0) {
      return res.json({ message: "Menu already seeded" });
    }

    const seedItems = [
      {
        name: "Party Jollof",
        desc: "Smoky tomato rice + plantain",
        price: 14,
        img: "https://niyis.co.uk/cdn/shop/articles/NIGERIAN_JOLLOF_RICE_5624df8e-b726-4d62-8a2e-44a565feb504.jpg?v=1738276335"
      },
      {
        name: "Beef Suya",
        desc: "Spicy grilled skewers",
        price: 12,
        img: "https://cheflolaskitchen.com/wp-content/uploads/2023/01/nigerian-suya-34-1024x717.jpg.webp"
      },
      {
        name: "Egusi Soup",
        desc: "Melon seed stew, spinach",
        price: 15,
        img: "https://images.squarespace-cdn.com/content/v1/614f831e90f08045038b4dae/9a18e8d0-efc6-4ca6-aa4c-656f7d53cd4e/Recipe-for-Egusi-Soup.png"
      },
      {
        name: "Pounded Yam",
        desc: "Paired with soup",
        price: 6,
        img: "https://travelandmunchies.com/wp-content/uploads/2025/03/IMG_9666-scaled.jpg"
      },
      {
        name: "Moi-Moi",
        desc: "Steamed bean pudding",
        price: 8,
        img: "https://pulses.org/images/com_yoorecipe/422/moi-moi-rollup.jpg"
      },
      {
        name: "Puff-Puff",
        desc: "Fried dough balls",
        price: 6,
        img: "https://allnigerianfoods.com/wp-content/uploads/puff_puff_recipe-500x500.jpg"
      }
    ];

    await MenuItem.insertMany(seedItems);
    res.json({ message: "Menu seeded" });
  } catch (err) {
    console.error("Error seeding menu:", err);
    res.status(500).json({ error: "Failed to seed menu" });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
