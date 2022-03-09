import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
			title: "User"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('burgers')
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: `${profile.name}'s profile`,
        profile,
        isSelf,
      })
    })
  })

  .catch((err) => {
    console.log(err)
    res.redirect("/")
  })
}

// thanks Jurgen, someday i will write this
// async function show(req,  res) {
//   const profile = Profile.findById(req.params.id)
//   const self = Profile.findById(req.user.profile._id)
//   const burgers = Burger.find({})
//   const usersBurgers = burgers.filter(burger => burger.owner === req.user.profile._id
// )

// res.render('profile/show', {
//   title: `${profile.name}'s Profile`,
//   profile,
//   usersBurgers
//   })
// }

export {
  index,
  show
}