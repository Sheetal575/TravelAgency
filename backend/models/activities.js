const mongodb = require('mongodb')

const getDb = require('../utils/database').getDb

class Activity {
  constructor(act_name, act_img, act_cont,id) {
    this.act_name = act_name
    this.act_img = act_img
    this.act_cont = act_cont
    this._id = id
  }
  save(){
     const db = getDb()
    let dbOp
    if (this._id) {
      dbOp = db
        .collection('activities')
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this })
    } else {
      dbOp = db.collection('activities').insertOne(this)
    }

    return dbOp
      .then((result) => {
        //console.log(result);
      })
      .catch((err) => {
        console.log(err)
      }) 
  }
    static fetchAll() {
    const db = getDb()
    return db
      .collection('activities')
      .find()
      .toArray()
      .then((activities) => {
        console.log('in activities');
        return activities
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
module.exports= Activity