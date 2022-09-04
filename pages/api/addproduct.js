import dbConnect from "../../Utility/Db_Connect"
import kprShopSchema from '../../Utility/Schema'

const Handler = async(req, res) => {
  await dbConnect()
  console.log(req.body)
  await kprShopSchema(req.body).save((err, data) => {
    if(err){
      console.log(err)
    } else{
      res.status(200).json(data)
    }
  })
}

export default Handler