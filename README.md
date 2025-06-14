# 🍽️ Paturi — A Restaurant-Themed Web Platform

**Paturi** is a modern, full-stack restaurant web application designed for food enthusiasts and culinary professionals. Built with **Next.js**, **Tailwind CSS**, **MongoDB**, and **Redux Toolkit**, Paturi brings an elegant UI, smooth UX, and optional AI-enhanced features to the table.

---

## 🚀 Features

### 👥 User Experience
- 🌟 **Home Page** with featured items and chef highlights
- 🍱 **Shop Page** with dynamic food menus and pricing
- 📄 **Product Detail Page** (`/shop/[id]`) with item descriptions
- 💖 **Wishlist** and 🛒 **Cart** management
- 📝 **Blog** for recipes, food stories, and culinary insights
- 🔐 **Authentication** (Login/Register)
- 🧾 **Checkout** flow
- 👨‍🍳 **Chef Profile Pages**
- 📞 **Contact** and 🏢 **About Us** pages

### 🔧 Functional
- 💨 Built with **Next.js App Router**
- 🎨 Styled using **Tailwind CSS** + **DaisyUI**
- 🔄 API communication via **RTK Query**
- 🧠 Optional **Gemini AI** integration
- 📦 Component-driven architecture for modularity
- 🌐 Backend powered by **MongoDB**

---

## 📁 Project Structure

```
/app
  /(auth)
    /login
    /register
  /(protected-layout)
    /dashboard
  /menu
  /shop
  /wishlist
  /cart
  /blog
  /checkout
  /about
  /contact
  /chef
/components
  - AuthForm.jsx
  - Navbar.jsx
  - Footer.jsx
  - MenuCard.jsx
  - ShopCard.jsx
  - FeatureComponent.jsx
  ...
/public
  - assets/
    - images, icons, banners
/utils
  - api.js
  - dbConnect.js
  - helpers.js
```

---

## ⚙️ Tech Stack

| Tech              | Role                        |
|------------------|-----------------------------|
| **Next.js 14+**  | App Router & SSR            |
| **Tailwind CSS** | Styling                     |
| **DaisyUI**       | Prebuilt UI components      |
| **MongoDB Atlas**| Cloud database              |
| **Redux Toolkit**| State management            |
| **RTK Query**    | API layer                   |
| **Gemini API**   | AI integration (optional)   |

---

## 🔧 Getting Started

1. **Clone the project**

```bash
git clone https://github.com/your-username/paturi.git
cd paturi
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment**

Create a `.env.local` file with:

```env
MONGODB_URI=your_mongo_uri
NEXT_PUBLIC_API_URL=http://localhost:3000/api
GEMINI_API_KEY=your_gemini_api_key
```

4. **Run development server**

```bash
npm run dev
```

---

## 🗂️ Pages Overview

| Route              | Purpose                          |
|-------------------|----------------------------------|
| `/`               | Home page                        |
| `/shop`           | Food listing                     |
| `/shop/[id]`      | Food item details                |
| `/wishlist`       | Saved favorites                  |
| `/cart`           | View & manage cart items         |
| `/checkout`       | Finalize orders                  |
| `/login` & `/register` | Auth pages                |
| `/blog`           | Culinary blog posts              |
| `/chef`           | Chef information                 |
| `/about` & `/contact` | Static info pages            |

---

## ✅ To-Do List

- [x] Core pages setup
- [x] Auth system
- [x] Product detail routing
- [x] Wishlist & cart logic
- [x] Responsive UI with Tailwind
- [ ] Order & payment system
- [ ] AI features with Gemini
- [ ] Admin dashboard

---

## 📄 License

This project is open-source and free to use for educational and portfolio purposes.

---

**Bon Appétit!** 🍛  
_— Built with ❤️ by the Paturi Dev Team_  
If you enjoyed this repo, don't forget to star it ⭐