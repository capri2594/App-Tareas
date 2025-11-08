import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb://localhost:27017/task-manager');
    console.log('🟢 Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('🔴 Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
