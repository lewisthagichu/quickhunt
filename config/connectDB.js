import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (connected) {
    console.log('MongoDB already connected.');
    return;
  }
  try {
    mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('Successfully connected to MongoDB...');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
