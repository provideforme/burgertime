import mongoose from 'mongoose'
import { Burger } from '../models/burger.js'



const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  // favorites: [{type: Schema.Types.ObjectId, ref: 'Burger'}],
}, {
  timestamps: true
})


const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
