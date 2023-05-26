// Starting mongoDB
// import mongoose from 'mongoose';

const mongoose = require("mongoose");

const NgoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, default: "" },
    target: { type: String, default: "" },
    description: { type: String, default: "" },
    password: { type: String, required: true },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Ngo", NgoSchema);