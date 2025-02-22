# Assignment API

This project provides a RESTful and GraphQL API for searching places such as pizza and juice shops using OpenStreetMap's Overpass API.

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16+ recommended)
- Docker (optional, for containerization)

### **Installation**
1. Clone the repository:
   ```sh
   git clone https://github.com/Bhavik2205/MSA_assignment.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the `.env` file:
   ```sh
   cp .env
   ```
   Edit `.env` with your configuration.

4. Start the server:
   ```sh
   npm start
   ```

---

## 🛠 API Documentation

### **REST API Endpoints**
#### **🔍 Search for Places**

- **GET** `/search/pizza?lat={latitude}&lon={longitude}`  
  **Example:**
  ```sh
  curl -X GET "http://localhost:3000/search/pizza?lat=40.7128&lon=-74.0060"
  ```
  **Response:**
  ```json
  [
    {
      "name": "Pizza Hut",
      "address": "123 Main St, New York, NY",
      "rating": 4.5
    }
  ]
  ```

- **GET** `/search/juice?lat={latitude}&lon={longitude}`  
  **Example:**
  ```sh
  curl -X GET "http://localhost:3000/search/juice?lat=40.7128&lon=-74.0060"
  ```

- **GET** `/search/combo?lat={latitude}&lon={longitude}`  
  **Returns both pizza and juice places.**

#### **📜 Swagger API Docs**
Swagger UI available at:
```
http://localhost:3000/api-docs
```

---

### **GraphQL API**
GraphQL API is available at:
```
http://localhost:3000/graphql
```

#### **📝 Example Queries**

- **Search for Pizza Places**
```graphql
query {
  searchPizza(lat: 40.7128, lon: -74.0060) {
    name
    address
    rating
  }
}
```

- **Search for Juice Places**
```graphql
query {
  searchJuice(lat: 40.7128, lon: -74.0060) {
    name
    address
    rating
  }
}
```

- **Search for Both**
```graphql
query {
  searchCombo(lat: 40.7128, lon: -74.0060) {
    name
    address
    rating
  }
}
```

#### **Testing in Postman**
1. Open Postman.
2. Set **HTTP Method** to `POST`.
3. Use URL: `http://localhost:3000/graphql`.
4. Go to the **Body** tab → Select **raw** → Choose **JSON**.
5. Enter the GraphQL query inside `query`.

Example:
```json
{
  "query": "query { searchPizza(lat: 40.7128, lon: -74.0060) { name address rating } }"
}
```

---

## 🐳 Docker Support

To run this app inside Docker:

1. Build the Docker image:
   ```sh
   docker build -t assignment-api .
   ```
2. Run the container:
   ```sh
   docker run -p 3000:3000 --env-file .env assignment-api
   ```

---

## ✅ Running Tests
Run unit tests with:
```sh
npm test
```
Run tests with coverage:
```sh
npm run test:coverage
```

---

## 📜 License
MIT License. See `LICENSE` file for details.

---

## 👨‍💻 Author
**Bhavik Patel**

