import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 🧩 Middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log('📥 Petición recibida:', req.method, req.url);
  next();
});

// 🚀 Rutas
app.use('/api/tasks', taskRoutes); // Monta directamente en /api/tasks

// 🔗 Conexión a MongoDB y arranque del servidor
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();