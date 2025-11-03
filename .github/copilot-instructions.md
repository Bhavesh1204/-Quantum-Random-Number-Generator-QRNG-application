# AI Agent Instructions for QRNG Project

## Project Architecture

This is a full-stack Quantum Random Number Generator (QRNG) application with:

- **Frontend**: React-based SPA (`/frontend`)
  - User authentication components (`LoginForm.js`, `RegisterForm.js`)
  - Main quantum generator interface (`QuantumGenerator.js`)
  - Uses axios for API communication with backend

- **Backend**: Express.js server (`/backend`)
  - RESTful API endpoints in `routes/`
  - MongoDB models in `models/`
  - Authentication routes in `authRoutes.js`
  - Quantum simulation in `quantumRoutes.js`

## Key Integration Points

1. API Base URL: `http://localhost:4000/api/`
2. Main Endpoints:
   - `/api/quantum/generate` - POST: Generate random bits
   - `/api/quantum/history` - GET: Fetch generation history
   - `/api/auth/*` - Authentication endpoints

## Development Workflow

1. **Setup**:
   ```bash
   # Backend
   cd backend
   npm install
   # Requires .env with MONGO_URI and PORT

   # Frontend
   cd frontend
   npm install
   ```

2. **Running the Application**:
   - Backend: `npm start` in `/backend` (runs on port 4000)
   - Frontend: `npm start` in `/frontend` (runs on port 3000)

## Project-Specific Patterns

1. **Quantum Simulation**:
   - Random bit generation simulated in `backend/routes/quantumRoutes.js`
   - Uses `measureQubit()` function for single-qubit measurements

2. **State Management**:
   - Frontend uses React hooks for local state
   - Authentication state stored in localStorage
   - See `QuantumGenerator.js` for state pattern examples

3. **Error Handling**:
   - Backend routes follow try-catch pattern with standardized response format:
     ```javascript
     { success: boolean, message?: string, error?: string, data?: any }
     ```

4. **Data Models**:
   - Results schema in `models/Result.js`
   - User schema in `models/User.js`

## Common Operations

1. **Adding New API Endpoints**:
   - Add route in appropriate file under `backend/routes/`
   - Follow existing error handling and response format patterns

2. **Frontend Components**:
   - Place in `frontend/src/components/`
   - Follow existing component structure with hooks pattern

3. **Authentication**:
   - Token-based auth using localStorage
   - Protected routes should check for valid token