# Atithi Bhava 🎉

**Plan, Organize, and Manage Events Effortlessly**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)

Atithi Bhava is a web application designed to simplify event planning, guest management, and RSVP tracking. Built with the MERN stack (MongoDB, Express, React, Node.js), it empowers organizers to create events, invite guests, and track attendance in real-time.

---

## Features ✨

### Core Features
- **Event Creation**: Set event details (title, date, location, max guests).
- **Guest Management**:
  - Add guests manually.
  - Track RSVP status (Attending/Not Attending/Maybe).
  - Collect dietary preferences and special notes.
- **RSVP System**:
  - Email invitations with unique RSVP links.
  - Public RSVP page for guests to confirm attendance.
- **Organizer Dashboard**:
  - Real-time guest list with filters.
- **User Authentication**: Sign up, sign in, and password reset.

---

## Tech Stack 🛠️

### Frontend
- **React** (Functional Components + Hooks)
- **React Router DOM** for navigation
- **Axios** for API calls
- **Tailwind CSS** for styling

### Backend
- **Node.js** + **Express.js** (REST API)
- **MongoDB** (with Mongoose ODM)
- **JWT** for authentication
- **Nodemailer** for email invites

---

## Installation 🚀

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas cluster)
- Git

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ranjankr73/Atithi-Bhava.git
   cd Atithi-Bhava
2. **Backend Setup**:
   ```bash
   cd Backend
   npm install
3. **Frontend Setup**:
   ```bash
   cd ../Frontend
   npm install
4. **Environment Variables**:
   - Create .env in /Backend:
   ```bash
   MONGODB_URI=your_mongodb_uri
   ACCESS_TOKEN_SECRET=your_jwt_access_token_secret
   REFRESH_TOKEN_SECRET=your_jwt_refresh_token_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
5. **Run the App**:
- Start the Backend:
   ```bash
   cd Backend
   npm run start
- Start the Frontend:
  ```bash
  cd ../Frontend
  npm run dev
