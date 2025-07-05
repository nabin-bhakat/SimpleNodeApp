# 🌽 Farm - Fresh Produce E-commerce Platform

A simple yet elegant Node.js web application showcasing fresh organic produce from Farm. This project demonstrates server-side rendering with dynamic content generation using vanilla HTML templates and a RESTful API.

## 🌟 Features

- **Product Catalog**: Browse through a variety of fresh fruits and vegetables
- **Detailed Product Pages**: View comprehensive information about each product
- **Organic Certification**: Visual indicators for organic products
- **Responsive Design**: Beautiful, modern UI with gradient backgrounds and hover effects
- **RESTful API**: JSON API endpoint for product data
- **Template System**: Dynamic HTML generation using custom template replacement

## 🛠️ Tech Stack

- **Backend**: Node.js with built-in HTTP module
- **Templating**: Custom template replacement system
- **Styling**: Pure CSS with modern design principles
- **Data Storage**: JSON file-based data storage
- **Fonts**: Google Fonts (Megrim, Nunito Sans)


## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**
   ```bash
   npm install slugify
   ```

3. **Start the server**
   ```bash
   node index.js
   ```

4. **Open your browser**
   Navigate to `http://localhost:8000`

## 🌐 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` or `/overview` | GET | Homepage with all products |
| `/product?id={id}` | GET | Individual product details |
| `/api` | GET | JSON API returning all product data |

## 🥬 Current Product Catalog

- **Juicy Mangoes** 🥭 - From India (Organic)
- **Sweet Bananas** 🍌 - From Kerala, India (Organic)
- **Apollo Broccoli** 🥦 - From Portugal (Organic)
- **Baby Carrots** 🥕 - From France (Organic)
- **Fresh Spinach** 🥬 - From Punjab, India (Non-organic)

## 🎯 Key Features Explained

### Organic Certification
Products are marked with visual indicators showing organic certification status. Non-organic products have the organic badge hidden using CSS.

### Responsive Cards
Product cards feature:
- Hover animations with scaling effects
- Skewed design elements for modern aesthetics
- Gradient backgrounds and smooth transitions
- Emoji-based product imagery

### Dynamic Routing
The server handles multiple routes:
- Overview page with all products
- Individual product pages with detailed information
- API endpoint for JSON data access
