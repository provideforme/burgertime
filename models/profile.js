import mongoose from 'mongoose'




const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  burgers: [{
    type: mongoose.Schema.Types.ObjectId, ref: "Burger"
  }]
}, {
  timestamps: true
})


const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
