# Quantum Random Number Generator (QRNG) Application

A full-stack web application that simulates quantum random number generation using quantum mechanical principles. The application provides a user-friendly interface for generating truly random numbers based on quantum principles.

## 🚀 Features

- **Quantum-Inspired Random Number Generation**
- **Real-time Statistics** showing distribution of generated bits
- **Historical Data** tracking previous generations
- **User Authentication** for secure access
- **Interactive UI** for generating random bits

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios for API communication
- LocalStorage for auth state management
- Modern React Hooks for state management

### Backend
- Node.js with Express
- MongoDB for data persistence
- JWT for authentication
- RESTful API architecture

## 🏗️ Project Structure

```
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── LoginForm.js
│   │   │   ├── RegisterForm.js
│   │   │   └── QuantumGenerator.js
│   │   └── App.js         # Main application component
│   └── package.json
│
└── backend/                # Express backend server
    ├── models/            # MongoDB models
    │   ├── Result.js
    │   └── User.js
    ├── routes/           # API routes
    │   ├── authRoutes.js
    │   └── quantumRoutes.js
    ├── server.js        # Main server file
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhavesh1204/-Quantum-Random-Number-Generator-QRNG-application.git
   cd -Quantum-Random-Number-Generator-QRNG-application
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install

   # Create .env file with:
   # MONGO_URI=your_mongodb_connection_string
   # PORT=4000
   # JWT_SECRET=your_jwt_secret

   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000

## 🔌 API Endpoints

### Quantum Routes
- `POST /api/quantum/generate` - Generate random bits
- `GET /api/quantum/history` - Get generation history
- `DELETE /api/quantum/delete/:id` - Delete a specific history item

### Authentication Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

## 🧪 Quantum Simulation

The application simulates quantum random number generation using the following principles:
- Simulates a qubit in superposition using Hadamard gate principles
- Measures the quantum state to generate random bits
- Provides equal probability distribution between 0 and 1

## 🔐 Security

- JWT-based authentication
- Secure password hashing
- Protected API endpoints
- CORS enabled for secure cross-origin requests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.