# 🛍️ E-commerce Product Listing – Frontend Developer Test

This is a responsive product listing UI developed as part of a frontend assessment. The component fetches real-world product data from an external API and displays it in a visually appealing, interactive product card layout using Bootstrap 5 and React.

---

## 📌 Project Overview

The goal was to create a **responsive product card component** using real-world data, following UI/UX best practices. The card includes:

- Product image
- Product name
- Product price
- A variant dropdown (optional)
- "Add to Cart" button
- Dynamic button state for stock availability

---

## ✅ Tasks Completed

| Feature / Requirement                                    | Status   |
|----------------------------------------------------------|----------|
| Fetch real product data from API (`https://fakestoreapi.com`) | ✅ Done   |
| Build a responsive product card                          | ✅ Done   |
| Display product image, name, and price                   | ✅ Done   |
| Add a dropdown for variant selection (dummy for now)     | ✅ Done   |
| Show an “Add to Cart” button                             | ✅ Done   |
| Disable “Add to Cart” if item is out of stock            | ✅ Done   |
| Add category filter buttons (Men/Women/Jewelry/Electronics) | ✅ Done   |
| Display loader while fetching data                       | ✅ Done   |
| Use Redux to manage cart state                           | ✅ Done   |
| Show success toast on add-to-cart                        | ✅ Done   |
| Use only Bootstrap 5 for styling                         | ✅ Done   |

---

## 🧩 Component Structure

### `ProductCard.jsx`
- Accepts a `product` object as prop
- Renders image, title, price
- Includes variant dropdown if available
- Shows "Add to Cart" or "Out of Stock" based on inventory

### `Products.jsx`
- Fetches product data using `useEffect`
- Manages loading and filtered product lists
- Handles category-based filtering
- Maps over the product array and renders `ProductCard` for each

---

## ⚙️ Technologies Used

- **React** (Functional components + Hooks)
- **Redux** (Cart management with `useDispatch`)
- **Bootstrap 5** (Responsive layout and styling)
- **react-loading-skeleton** (Loading placeholders)
- **react-hot-toast** (Feedback on user actions)
- **Fake Store API** (Realistic product data)

---

## 📱 Responsiveness

- Used Bootstrap's grid system (`col-md-4`, `col-sm-6`, etc.) for layout
- Cards automatically stack on smaller screens
- Used `img-fluid`, `d-flex`, `mt-auto` and spacing utilities for adaptive design

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsh1051/ecommerce-product-card
   cd ecommerse-product-card



## Run Locally

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```
