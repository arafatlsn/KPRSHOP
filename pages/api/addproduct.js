import dbConnect from "../../Utility/Db_Connect";
import kprShopSchema from "../../Utility/Schema";

const Handler = async (req, res) => {
  await dbConnect();
  if (req.method === "POST") {
    await kprShopSchema(req.body).save((err, data) => {
      if (err) {
        console.log("9", err);
      } else {
        res.status(200).json(data);
      }
    });
  }

  if (req.method === "GET") {
    await kprShopSchema
      .find({})
      .exec((err, data) => {
        if (err) {
          console.log("21", err);
        } else {
          console.log("23", data)
          res.status(200).json(data);
        }
      });
  }
};

export default Handler;
