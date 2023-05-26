import connectDB from "../../middleware/mongoose";
import Campaign from "../../models/Campaign";
import newsAndEvent from "../../models/newsAndEvent";


const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    const jwt = require('jsonwebtoken');
    const token_data = jwt.verify(req.body.user, process.env.JWT_Key);

    let n = new Campaign({
      title: req.body.title,
      category: req.body.category,
      target: req.body.target,
      description: req.body.description,
      image: req.body.image,
      additionalContact: req.body.additionalContact,

      name:token_data.name,
      email:token_data.email,
      
    });
    await n.save();
    
    const newsMSG = `A new Campaign was created the name ${req.body.name} that targets the area of ${req.body.category}.Target Amount: ${req.body.target}. All donations are appretiated.`;
    // console.log(newsMSG);
    const news = newsAndEvent({
      news:newsMSG,
  });
  await news.save();

  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }

  let campaign = await Campaign.find();
  res.status(200).json({ campaign });
};

export default connectDB(handler);