import connectDB from "../../middleware/mongoose";
import Ngo from "../../models/Ngo";
import newsAndEvent from "../../models/newsAndEvent";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let n = new Ngo({
      email: req.body.email,
      description: req.body.description,
      name: req.body.name,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      target: req.body.target,
      image: req.body.image,
    });
    await n.save();
    
    const newsMSG = `A new NGO was found under the name ${req.body.name} that targets the area of ${req.body.target}. All donations are appretiated.`;
    // console.log(newsMSG);
    const news = newsAndEvent({
      news:newsMSG,
  });
  await news.save();

  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }

  let ngo = await Ngo.find();
  res.status(200).json({ ngo });
};

export default connectDB(handler);