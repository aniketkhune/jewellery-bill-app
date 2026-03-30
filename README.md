# 💍 Jewellery Bill Calculator

A full-stack Spring Boot + React application that calculates jewellery bills based on gold rate, purity, weight, and making charges.

---

## 🧮 Formula Used

```
Rate per gram   = (24K Rate / 10) × (Purity / 100)
Base Amount     = Weight × Rate per gram
Making Charges  = Base Amount × (Making Charges % / 100)
Total Bill      = round(Base Amount + Making Charges)
```

---

## 📁 Project Structure

```
jewellery-bill-app/
├── backend/                  # Spring Boot (Java 17)
│   ├── src/main/java/com/jewellery/bill/
│   │   ├── BillCalculatorApplication.java
│   │   ├── controller/BillController.java
│   │   ├── model/BillRequest.java
│   │   ├── model/BillResponse.java
│   │   └── service/BillService.java
│   ├── pom.xml
│   └── Dockerfile
├── frontend/                 # React 18
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/index.html
│   ├── package.json
│   ├── Dockerfile
│   └── nginx.conf
└── docker-compose.yml
```

---

## 🚀 Running Locally

### Option 1 — Docker Compose (Recommended)

> Requires: Docker + Docker Compose

```bash
cd jewellery-bill-app
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8080/api

---

### Option 2 — Manual (Dev Mode)

**Backend:**
```bash
cd backend
./mvnw spring-boot:run
# Runs at http://localhost:8080
```

**Frontend:**
```bash
cd frontend
npm install
npm start
# Runs at http://localhost:3000
# Proxy in package.json routes /api → localhost:8080
```

---

## 🌐 API Reference

### POST `/api/calculate`

**Request body:**
```json
{
  "rate24Carat": 72000,
  "purity": 91.6,
  "weight": 10.5,
  "makingCharges": 12
}
```

**Response:**
```json
{
  "weight": 10.5,
  "ratePerGram": 6595.2,
  "baseAmount": 69249.6,
  "makingChargesAmount": 8309.95,
  "totalBill": 77560.0,
  "message": "Your total bill for 10.5g is ₹77560.0"
}
```

### GET `/api/health`
Returns `200 OK` — used to verify the backend is running.

---

## 🛠 Tech Stack

| Layer     | Technology           |
|-----------|----------------------|
| Backend   | Spring Boot 3.2, Java 17 |
| Frontend  | React 18             |
| API       | REST (JSON)          |
| Packaging | Maven                |
| Container | Docker + nginx       |
