require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const route = require('./routes/routes')

const { mongoConnect } = require('./utils/database')

const app = express()
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
    )
  },
})
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
)
app.use(route)
app.get('/',(req,res) => {
    console.log("chl rha h");
    res.send("we are on home")
})

mongoConnect(() => {
  app.listen(process.env.PORT ||3000)
})
