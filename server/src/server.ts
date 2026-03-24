import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { connectDB } from './config/db';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // ✅ Connect to MongoDB first
    await connectDB();

    // ✅ Start server only if DB is connected
    app.listen(PORT, () => {
      console.log(`🚀 TEST`);
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();