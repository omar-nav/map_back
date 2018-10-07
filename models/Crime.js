const mongoose = require('mongoose')
const Schema = mongoose.Schema

const crimeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  pictureLink: String,
  caption: String,
  location: {
    type: {
      type: String,
      default: "Point"
    },
    address: String,
    coordinates: {
      lat: { type: Number },
      lng: { type: Number }
    }
  }
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  })

module.exports = mongoose.model('Crime', crimeSchema)