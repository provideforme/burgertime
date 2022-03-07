import mongoose from 'mongoose'

const Schema = mongoose.Schema

const burgerSchema = new Schema({
  name: String,
  restaurant: String,
  location: String,
  cook: {
    String,
    enum: ['Rare', 'Medium-Rare', 'Medium', 'Medium-Well', 'Well-Done'],
  },
  cheese: Boolean,
  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"
  },
})

const Burger = mongoose.model('Burger', burgerSchema)

export {
  Burger
}