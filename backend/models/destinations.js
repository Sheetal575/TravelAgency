const mongodb = require('mongodb')

const getDb = require('../utils/database').getDb

class Destination {
  constructor(dest_name, dest_img, dest_cont,id) {
    this.dest_name = dest_name
    this.dest_img = dest_img
    this.dest_cont = dest_cont
    this._id = id
  }
  save(){
     const db = getDb()
    let dbOp
    if (this._id) {
      dbOp = db
        .collection('destinations')
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this })
    } else {
      dbOp = db.collection('destinations').insertOne(this)
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
      .collection('destinations')
      .find()
      .toArray()
      .then((destinations) => {
        console.log('in destinations');
        return destinations
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
module.exports= Destination