// Starting mongoDB
// import mongoose from 'mongoose';

const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema(
  {
    title:{ type: String, required: true },
    name: { type: String, required: true },
    email: {type: String, required: true },
    category:{type:String, required: true},
    raised: {type: Number, default:0},
    target: { type: Number, required: true },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    status: {type: String, default: "On Going"},
    supporters: {type: Number, default:0},
    additionalContact: {type: String, default:""}

  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Campaign", CampaignSchema);