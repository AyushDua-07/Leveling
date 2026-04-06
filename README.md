# Apex Advisory

A full-stack consulting marketplace that connects entrepreneurs and small businesses with verified professional consultants.

## Architecture

| Layer | Technology | Directory |
|-------|-----------|-----------|
| Frontend | React 18 + TypeScript + Vite + Tailwind CSS | `apex-advisory-frontend/` |
| Backend | Node.js + Express.js + Mongoose | `apex-advisory-backend/` |
| Database | MongoDB Atlas (M0 free tier) | Cloud-hosted |

## Features

- **Three user roles**: Client, Consultant, Admin
- **Real authentication** with JWT (no mock data)
- **Consultant verification** workflow (admin approves/rejects)
- **Appointment booking** with availability slots
- **Reviews and ratings** system
- **Simulated payments** with commission tracking
- **Admin dashboard** with stats, user management, and session oversight
- **Animated penguin mascot** on login/signup pages
- **Responsive design** with Navy/Royal Blue/Gold color scheme

## Quick Start

### Backend

```bash
cd apex-advisory-backend
cp .env.example .env
# Fill in MONGO_URI and JWT_SECRET in .env
npm install
npm run seed   # Creates admin user + membership plans
npm start      # Runs on port 5000
```

### Frontend

```bash
cd apex-advisory-frontend
cp .env.example .env
# Set VITE_API_BASE_URL=http://localhost:5000/api in .env
npm install
npm run dev    # Runs on port 5173
```

### Default Admin Login

- **Email**: `admin@apex.com`
- **Password**: `Admin123!`

## Deployment

### Backend (Render)

- Build command: `npm install`
- Start command: `npm start`
- Environment variables: `MONGO_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN=7d`, `NODE_ENV=production`, `CLIENT_ORIGIN`

### Frontend (Vercel)

- Framework: Vite
- Environment variable: `VITE_API_BASE_URL` = your Render backend URL + `/api`
- SPA rewrites configured in `vercel.json`

### MongoDB Atlas

- M0 free tier cluster
- Network Access: Allow from anywhere (0.0.0.0/0)
- Database user with read/write access

## User Flows

1. **Clients** sign up, browse approved consultants, book appointments, join sessions, leave reviews
2. **Consultants** sign up (pending status), get approved by admin, then appear in listings
3. **Admin** logs in, views stats, approves/rejects consultants, manages users and sessions
