import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.l
  (error.message))
}

export default dbConnect;