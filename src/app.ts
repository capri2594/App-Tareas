// src/app.ts

import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import taskRoutes from './routes/taskRoutes';

const app = express();
const PORT = 3000;

// 🧩 Middlewares
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json()); // Permite leer JSON en el body
// 👇 Este middleware imprime todas las peticiones
app.use((req, res, next) => {
  console.log('📥 Petición recibida:', req.method, req.url);
  next();
});


// 🚀 Rutas
app.use('/api', taskRoutes); // Monta todas las rutas bajo /api

// 🔗 Conexión a MongoDB y arranque del servidor
const startServer = async () => {
  try {
    await connectDB(); // 👈 Llama a tu función de conexión
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();