# 🛍️ Display Store Platform
This is a full-stack web application built from scratch that serves as the main product search page for an online store. It includes product browsing, detailed product view, and a form for adding new products with images.
---
## 🚀 Tech Stack
### Backend: (https://github.com/JMGHabeycH/displayStoreBackend)
- **Node.js**
- **Express.js**
- **MongoDB Atlas** (cloud-based NoSQL database)
- **Mongoose** (MongoDB ODM)

### Frontend:
- **React.js**
- **Axios** (for API requests)
---
## 📌 Features
- **🔍 Product Search Page**: Allows users to search and view a list of products dynamically fetched from the database.
- **📄 Product Detail Page**: Each product has a dedicated page displaying all its information.
- **➕ Create Product Form**: A form to add new products, including image upload functionality.
---
##🧱 Project Structure
/client        → React frontend  
/server        → Node.js + Express backend  

### Backend (/server)
- Connects to MongoDB Atlas.
- Provides API endpoints to:
  - Fetch products filtered by search.
  - Fetch a single product by ID.
  - Add a new product.

### Frontend (/client)
Built with React.

- Pages include:
  - Home (Product Search)
  - Product Listing.
  - Product Detail.
  - Create Product Form.
