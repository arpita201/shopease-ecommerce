# 🛒 ShopEase Ecommerce Website

A modern React-based Ecommerce Website developed as part of the Frontend Development Internship. This project was built incrementally over multiple weeks by adding new features and improving the application.

---

# 📌 Project Overview

ShopEase is a responsive ecommerce website where users can browse products, search and filter items, view product details, manage their shopping cart, authenticate users, and fetch product data from a backend API connected to MongoDB.

---

# 🚀 Technologies Used

## Frontend

- React JS
- React Router DOM
- JavaScript (ES6)
- HTML5
- CSS3
- React Context API
- localStorage
- React Toastify
- Vite

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- CORS

## Tools

- Git
- GitHub
- Postman


---

# ✅ Week 1 Features

- Responsive Home Page
- Products Page
- Product Details Page
- Shopping Cart UI
- Navbar
- Footer
- Hero Section
- Product Cards
- Figma-based Design

---

# ✅ Week 2 Features

- Dynamic Product Rendering
- products.json Integration
- React Router Navigation
- Search Functionality
- Category Filter
- Dynamic Product Details Page
- Improved UI & Layout

---

# ✅ Week 3 Features

- Add to Cart Functionality
- Quantity Increase & Decrease
- Remove Item from Cart
- Dynamic Total Price Calculation
- Global State Management using Context API
- Persistent Cart using localStorage
- Navbar Cart Badge
- Toast Notification
- Go Back Button
- Responsive Cart Page

# ✅ Week 4 Features

- Login Page
- Signup Page
- Show / Hide Password
- Frontend Form Validation
- Email Validation
- Password Validation
- Confirm Password Validation
- Checkout Page
- Shipping Information Form
- Order Summary
- User Authentication using localStorage
- Protected Checkout (Login Required)
- Order Success Page
- Logout Functionality
- Active Navigation using NavLink
- Responsive Login, Signup & Checkout Pages

---

# ✅ Week 5 Features

- Backend Integration using Node.js & Express.js
- MongoDB Atlas Database
- Product Model using Mongoose
- REST API Development
- GET /api/products
- GET /api/products/:id
- Frontend Connected with Backend API
- Products fetched from MongoDB
- Dynamic Product Details from Backend
- Loading State Handling
- Error State Handling
- Environment Variables using dotenv
- CORS Configuration

---

# 📂 Folder Structure

```text
shopease-ecommerce/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── seedProducts.js
│   ├── package.json
│   └── .env
│
├── public/
├── screenshots/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

# 📸 Screenshots

## Week 2

### Home Page
![Home](screenshots/home-page.png)

### Products Page
![Products](screenshots/products-page.png)

### Product Details
![Product Details](screenshots/product-details.png)

### Search Feature
![Search](screenshots/search-feature.png)

### Category Filter
![Category Filter](screenshots/category-filter.png)

### Cart Page
![Cart](screenshots/cart-page.png)

---

## Week 3

### Products Page
![Products](screenshots/week3-products-page.png)

### Product Details
![Product Details](screenshots/week3-product-details.png)

### Add to Cart Toast
![Toast](screenshots/week3-add-to-cart-toast.png)

### Shopping Cart
![Shopping Cart](screenshots/week3-cart-page.png)

### Quantity Update
![Quantity Update](screenshots/week3-quantity-update.png)

### Empty Cart
![Empty Cart](screenshots/week3-empty-cart.png)

---

## Week 4

### Login Page
![Login](screenshots/week4-login-page.png)

### Login Validation
![Login Validation](screenshots/week4-login-validation.png)

### Signup Page
![Signup](screenshots/week4-signup-page.png)

### Signup Validation
![Signup Validation](screenshots/week4-signup-validation.png)

### Checkout & Order Summary
![Checkout & Order Summary](screenshots/week4-checkout-page.png)

### Order Success
![Order Success](screenshots/week4-order-success.png)


---

## Week 5

### Home Page (Backend API)
![Home](screenshots/week5-home-page.png)

### Products Page (Backend API)
![Products](screenshots/week5-products-page.png)

### Product Details (Backend API)
![Product Details](screenshots/week5-product-details.png)

### API - Get All Products
![API Products](screenshots/week5-api-products.png)

### API - Get Single Product
![API Single Product](screenshots/week5-api-single-product.png)

### MongoDB Atlas Database
![MongoDB](screenshots/week5-mongodb.png)

# ⚙️ Installation

## Frontend

```bash
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

Server runs at:

```
https://shopease-backend-ipy9.onrender.com
```

---

# 🔗 API Endpoints

### Get All Products

```
GET /api/products
```

Returns all products from MongoDB.

### Get Single Product

```
GET /api/products/:id
```

Returns a single product using MongoDB ObjectId.

# 🔐 Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

# 📚 Learning Outcomes

- React Components
- React Router
- Dynamic Rendering
- Context API
- localStorage
- State Management
- Responsive Design
- Git & GitHub Workflow
- Form Validation
- User Authentication
- Protected Checkout Flow
- Authentication using localStorage
- REST API Development
- Express.js
- MongoDB Atlas
- Mongoose
- Backend Integration
- Environment Variables
- CORS
---

# 🔮 Future Improvements

- JWT Authentication
- Payment Gateway Integration
- Wishlist
- User Profile
- Order History
- Product Reviews
- Admin Dashboard
---

# 👩‍💻 Author

**Arpita Saha**



GitHub:
https://github.com/arpita201

---


