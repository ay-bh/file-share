# Project Title: file-share

## Description

Born out of the frustration of trying to seamlessly transfer files between my Android device and Mac. This project is a full-stack file-sharing application that leverages Cloudinary’s storage solutions alongside the multer node package for efficient file uploading and sharing. The application is designed using Next.js and TypeScript, with a user-friendly interface crafted using Mantine UI. The backend is powered by Express and MongoDB, ensuring robust and scalable performance.

## Features

- File upload and sharing capabilities.
- Integration with Cloudinary for storage.
- Robust backend with Express and MongoDB.
- Elegant and responsive UI with Mantine UI.
- TypeScript for improved code reliability.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Cloudinary account

### Installation

1. **Clone the Repository**

   ```bash
   git clone [repository URL]
   cd [repository folder]
   ```

2. **Install Dependencies**

   Navigate to both the client and server directories and install dependencies.

   ```bash
   # Install dependencies for server
   cd server
   npm install

   # Install dependencies for client
   cd client
   npm install
   ```

3. **Set up Environment Variables**

   Create `.env` files in both `client` and `server` directories with the necessary environment variables. For example, in the server directory:

   ```plaintext
   MONGODB_URI=[Your MongoDB URI]
   CLOUDINARY_URL=[Your Cloudinary URL]
   ```

### Running the Application

1. **Start the Server**

   In the `server` directory, run:

   ```bash
   npm start
   ```

2. **Start the Client**

   In a new terminal, navigate to the `client` directory and run:

   ```bash
   npm run dev
   ```

   The application should now be running on `localhost:3000`.
