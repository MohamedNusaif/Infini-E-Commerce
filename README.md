# 🛍️ E-Commerce Platform

A full-stack E-Commerce platform that enables users to browse products, manage shopping carts, place orders, and securely manage their accounts. The application consists of a React frontend and a Node.js/Express backend with a database for data management.

---

## 🚀 Features

### Customer Features

- User Registration & Login
- JWT Authentication
- Browse Products
- Search & Filter Products
- Product Details Page
- Shopping Cart Management
- Checkout Process
- Order History
- User Profile Management
- Responsive Design

### Admin Features

- Dashboard Overview
- Product Management (CRUD)
- Category Management
- Order Management
- User Management
- Inventory Tracking

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router
- Axios
- Context API / Redux
- Vite

### Backend

- Node.js
- Express.js
- MongoDB / MySQL
- JWT Authentication
- Bcrypt
- Multer
- CORS
- dotenv

---

## 📁 Project Structure

```text
ecommerce-platform/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── assets/
│   │   ├── layouts/
│   │   └── utils/
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── services/
│   │   ├── config/
│   │   └── utils/
│   │
│   ├── uploads/
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/MohamedNusaif/Infini-E-Commerce.git
cd ecommerce-platform
```

---

## Frontend Setup

### Navigate to Frontend

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

### Run Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Backend Setup

### Navigate to Backend

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=ecommerce

JWT_SECRET=your_secret_key
```

### Run Backend

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Products

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/products | Get All Products |
| GET | /api/products/:id | Get Product By ID |
| POST | /api/products | Create Product |
| PUT | /api/products/:id | Update Product |
| DELETE | /api/products/:id | Delete Product |

### Categories

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/categories | Get Categories |
| POST | /api/categories | Create Category |
| PUT | /api/categories/:id | Update Category |
| DELETE | /api/categories/:id | Delete Category |

### Orders

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/orders | Get Orders |
| POST | /api/orders | Create Order |
| PUT | /api/orders/:id | Update Order Status |

---

## 🔒 Security Features

- JWT Authentication
- Password Hashing with Bcrypt
- Role-Based Authorization
- Protected API Routes
- Input Validation
- Error Handling Middleware
- Environment Variable Protection

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Product Listing
- Product Details
- Shopping Cart
- Checkout Page
- User Dashboard
- Admin Dashboard

---

## 🎯 Future Enhancements

- Online Payment Integration
- Wishlist Functionality
- Product Reviews & Ratings
- Coupon System
- Email Notifications
- Order Tracking
- AI Product Recommendations
- Multi-Vendor Support

---

## 👨‍💻 Author

**Mohamed Nusaif**

- Full Stack Developer
- React Developer
- Node.js Developer

---

## 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project.
