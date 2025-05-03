# 📚 BookShow

**BookShow** is a mobile application built with **React Native (Expo)** for the frontend and **Node.js** for the backend. It allows users to share and discover book recommendations through posts that include ratings, images, and descriptions.


## 🧠 Project Description

BookShow is designed to promote reading by enabling users to share book recommendations. Each user can:

- 🔐 Register and log in  
- 📖 Browse book recommendations shared by other users  
- 🌟 Post their own recommendations, including:
  - Title, description, image, and rating  
- 👤 Access their profile to:
  - View personal information  
  - Delete their own posts  


## 🚀 Technologies Used

### Frontend (📱 `mobile/`)
- React Native
- Expo

### Backend (🌐 `backend/`)
- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)


## 🛠️ Installation & Setup

### 1. Create Required Accounts

- **Database**: [MongoDB](https://www.mongodb.com/)  
- **Image Hosting**: [Cloudinary](https://cloudinary.com/)  
- **Backend Hosting**: [Render](https://render.com/)  
- **Frontend Hosting**: [Expo Go](https://expo.dev/)


### 2. Clone the Repository & Configure Environment

**Repository**: [https://github.com/pnicolaum/bookshow](https://github.com/pnicolaum/bookshow)

In the `backend/` folder, create a `.env` file with the following variables:

```env
PORT=
MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
API_URL=

```

In `mobile/constants/api.js` replace the existing API_URL with your own API_URL.


### 3. Run the Project Locally
#### Frontend (Expo)
```bash
cd mobile
npm install
npx expo start

```

#### Backend (Node.js)
```bash
cd backend
npm install
npm run dev

```


## 📱 Tips for Emulating

For the best development experience, it's recommended to:

- ✅ **Use the [Expo Go](https://expo.dev/client) app** on your mobile device (iOS or Android) and scan the **QR code** that appears when running `npx expo start`.
- 🧪 If you prefer to emulate on your computer, you can:
  - Install an **Android emulator** (e.g., Android Studio)
  - Use an **iOS simulator** (available on macOS via Xcode)

⚠️ **Note:** This app is designed for mobile devices and is **not intended to run in a web browser**. Use a physical device or emulator for accurate testing.

