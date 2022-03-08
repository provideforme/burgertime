import mongoose from 'mongoose'




const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  // reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reviews'}],
}, {
  timestamps: true
})


const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
