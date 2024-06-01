# Learn Java Spring

Welcome to the Learn Java Spring project! This repository helps you learn the basics of Spring Boot by building a simple product management application with a React frontend.

## Setup

### Prerequisites

- Java Development Kit (JDK) 8 hoặc cao hơn
- Maven
- Node.js và npm (cho frontend React)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hoangvos/Learn_java_spring.git
   cd Learn_java_spring
2. **Build and run the backend:**
   ```bash
   mvn clean install
   mvn spring-boot:run
- The backend sẽ chạy tại http://localhost:8080.

3. **Setup và run the frontend:**
   ```bash
   cd frontend
   npm install
   npm start
- The frontend sẽ chạy tại http://localhost:3000.

## Project Structure
- Backend (Spring Boot)
-- Model: Defines the Product entity.
-- Repository: Interface for database operations.
-- Service: Contains business logic.
-- Controller: Handles HTTP requests.
- Frontend (React)
-- Components and pages to interact with the backend API.
## API Endpoints
- GET /products - Retrieve all products
- GET /products/product/{name} - Retrieve a product by name
- POST /products - Add a new product
- PUT /products/{id} - Update a product by ID
- DELETE /products/{id} - Delete a product by ID

