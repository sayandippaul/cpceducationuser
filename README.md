# 📚 CPC Education – Coaching Management System

CPC Education is a full-stack web application developed as part of my internship project for **Mr. Anup Kumar Paswan** to help digitize and automate the coaching institute’s operations. It streamlines **course admissions**, **student management**, **automated fee receipts**, and **admin control**, enabling smooth online interaction between students and coaching administrators.


This is website github for all the students  
---

## 🔗 Live Demo

- 🌐 **Student Portal**: [https://cpc-education.vercel.app](https://cpc-education.vercel.app)
- 🔐 **Admin Portal**: [https://cpceducationadmin.vercel.app](https://cpceducationadmin.vercel.app)

---

## 🎯 Features

### 🧑‍🎓 Student Platform
- Sign up / Login
- Explore available courses
- View course details and prices
- Send admission requests
- Access personal dashboard with course, events, and fee updates
- Receive automated fee receipts via email

### 👨‍🏫 Admin Platform (For Coaching Owner)
- Secure Admin Login
- Dashboard Overview:
  - Total Students
  - Monthly Payments
  - Courses Offered
  - Certificates Issued
- Manage:
  - Courses
  - Students
  - Payment Records
  - Batches
  - Feedback & Enquiries
  - Certification Issuance (Till not implemented)
- Auto-generate fee receipts and send via email (using Gmail API + PDF Maker)

---

## 💻 Tech Stack

| Frontend        | Backend       | Database       | APIs & Tools           | Deployment         |
|-----------------|---------------|----------------|-------------------------|---------------------|
| React.js        | Node.js       | MongoDB Atlas  | Gmail API (Email)       | Vercel (Frontend)   |
| HTML / CSS      | Express.js    |                | PDF Maker API (Receipts)| Render (Backend)    |

---

## 📩 Email & PDF Automation

- **Gmail API**: Sends fee receipts directly to the student’s registered email.
- **PDF Generator API**: Dynamically generates and formats the fee receipts as PDFs before sending.

---

## 🖼️ Images

### 📌 Student Portal

!(img/photo_1_2025-07-04_22-53-03.jpg)
!(img/photo_2_2025-07-04_22-53-03.jpg)
img/photo_3_2025-07-04_22-53-03.jpg

img/photo_7_2025-07-04_22-53-03.jpg


### 👨‍🏫 Admin Panel

!(img/photo_2_2025-07-04_22-53-03.jpg)
!(img/photo_4_2025-07-04_22-53-03.jpg)
!(img/photo_6_2025-07-04_22-53-03.jpg)

## 📁 Folder Structure

```
cpc-education/
├── public/              # React frontend (Student)
├── src/         # React frontend (Admin)
```

---

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/cpc-education.git
cd cpc-education
```

### 2. Setup Backend
```bash
cd server
npm install
# Create `.env` file with MongoDB URI, Gmail API Keys, etc.
npm start
```

### 3. Setup Frontend (Student)
```bash
cd client
npm install
npm run dev
```

### 4. Setup Admin Panel
```bash
cd admin-panel
npm install
npm run dev
```

---


---

## 📦 Future Improvements

- Role-based access control (RBAC)
- SMS integration for notifications
- Certificate auto-generation and delivery
- Better analytics dashboard (charts, graphs)
- Admin activity logs
- Student attendance tracking

---

## 🙋‍♂️ Author

**Sayandip Paul**  
B.Tech in Information Technology (2022–2026)  
Kalyani Government Engineering College  
🔗 [LinkedIn](https://www.linkedin.com/in/sayandip-paul-4b66aa220) • [GitHub](https://github.com/sayandippaul)

---
