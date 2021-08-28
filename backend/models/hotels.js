const mongodb = require('mongodb')

const getDb = require('../utils/database').getDb

class Hotel {
  constructor(hot_name, hot_img, hot_cont,id) {
    this.hot_name = hot_name
    this.hot_img = hot_img
    this.hot_cont = hot_cont
    this._id = id
  }
  save(){
     const db = getDb()
    let dbOp
    if (this._id) {
      dbOp = db
        .collection('hotels')
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this })
    } else {
      dbOp = db.collection('hotels').insertOne(this)
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
      .collection('hotels')
      .find()
      .toArray()
      .then((hotels) => {
        console.log('in hotels');
        return hotels
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
module.exports= Hotel