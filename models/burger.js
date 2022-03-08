import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5},
  reviewer: String,
  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"
  },
}, {
  timestamps: true
})

const burgerSchema = new Schema({
  name: String,
  restaurant: String,
  location: String,
  cook: {
    type: String,
    enum: ['Rare', 'Medium-Rare', 'Medium', 'Medium-Well', 'Well-Done'],
  },
  cheese: Boolean,
  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"
  },
  reviews: [reviewSchema],
})

const Burger = mongoose.model('Burger', burgerSchema)

export {
  Burger
}