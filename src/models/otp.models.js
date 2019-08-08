import db from '../libs/connectDB';

const otpModule = {}

otpModule.getFunction = async (req, res) => {
  try {
    let data = await db.get().collection('members').findOne({'_id':1})
    return res.json({success:true, message: 'function getFunction()', data:data})
  } catch (e) {
    return res.json({success:false, message: 'error query data !!!' })
  }
}

otpModule.getData = async (req, res) => {
  try {
    let data = await db.get().collection('members').find({ '_id': 1 }).toArray();
    return res.json({success:true, message: 'function getData()', data:data })
  } catch (e) {
    return res.json({success:false, message: 'error query data !!!' })
  } finally {
    db.closeConnect()
  }
}

export default otpModule