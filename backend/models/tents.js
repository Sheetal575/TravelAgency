const mongodb = require('mongodb')

const getDb = require('../utils/database').getDb

class Tent {
  constructor(tent_name, tent_img, tent_cont,id) {
    this.tent_name = tent_name
    this.tent_img = tent_img
    this.tent_cont = tent_cont
    this._id = id
  }
  save(){
     const db = getDb()
    let dbOp
    if (this._id) {
      dbOp = db
        .collection('tents')
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this })
    } else {
      dbOp = db.collection('tents').insertOne(this)
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
      .collection('tents')
      .find()
      .toArray()
      .then((tents) => {
        console.log('in tents');
        return tents
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
module.exports= Tent