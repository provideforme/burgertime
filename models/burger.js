import mongoose from 'mongoose'

const Schema = mongoose.Schema

const burgerSchema = new Schema({
  name: String,
  location: String,
  cheese: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Burger = mongoose.model('Burger', burgerSchema)

export {
  Burger
}