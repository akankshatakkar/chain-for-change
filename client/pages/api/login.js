import Ngo from "../../models/Ngo";
import Philanthropist from "../../models/Philanthropist"
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => 
{
    if (req.method == "POST") 
    {
      //console.log(req.body)
      if(req.body.category == "ngo")
      {
      let ngoUser = await Ngo.findOne({ email: req.body.email });
      if (ngoUser) 
      {
        //console.log(decryptedPassword);
        if (
          req.body.email == ngoUser.email &&
          req.body.password == ngoUser.password
        )
        
        {
          const jwt = require('jsonwebtoken');
          var token = jwt.sign({ email: ngoUser.email, name: ngoUser.name, category: "ngo" }, process.env.JWT_Key , { expiresIn: '3d' });
          res
            .status(200)
            .json({ success: true, token:token, category:"ngo" });
        } else {
          res.status(200).json({ success: false, error: "Invalid Password" });
        }
      } else {
        res.status(200).json({ success: false, error: "User Not Found" });
      }
    }
   
  else if(req.body.category == "philanthropist")
  {
    let philanthropist = await Philanthropist.findOne({ email: req.body.email });
      if (philanthropist) 
      {
        //console.log(decryptedPassword);
        if (
          req.body.email == philanthropist.email &&
          req.body.password == philanthropist.password
        )
        
        {
          const jwt = require('jsonwebtoken');
          var token = jwt.sign({ email: philanthropist.email, name: philanthropist.name, category: "philanthropist" }, process.env.JWT_Key , { expiresIn: '3d' });
          res
            .status(200)
            .json({ success: true, token:token , category:"philanthropist"});
        } else {
          res.status(200).json({ success: false, error: "Invalid Password" });
        }
      } else {
        res.status(200).json({ success: false, error: "User Not Found" });
      }
    
  }
  else {
    res.status(400).json({ error: "This method is not allowed : Wrong Category" });
  }
}else {
  res.status(400).json({ error: "This method is not allowed" });
}
  };
  
  export default connectDB(handler);