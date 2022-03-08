import { Burger } from '../models/burger.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  Burger.find({})
  .then(burgers => {
    res.render('burgers/index', {
      burgers,
      title: "Burgers"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/burgers")
  })
}

function newBurger(req, res){
  res.render('burgers/new', {
    title: "Add Burger"
  })
}

function create(req, res) {
  console.log(req.body)
  req.body.owner = req.user.profile._id
	req.body.cheese = !!req.body.cheese
  Burger.create(req.body)
  .then(burger => {
    res.redirect(`/burgers/${burger._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/burgers')
  })
}

function show(req, res) {
  Burger.findById(req.params.id)
  .populate("owner")
  .populate({path: "reviews.owner"})
  .then(burger => {
    res.render('burgers/show', {
      burger,
      title: "Show Burger"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/burgers')
  })
}

function edit(req, res) {
  Burger.findById(req.params.id)
  .then(burger => {
    res.render('burgers/edit', {
      burger,
      title: "Edit Burger"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/burgers')
  })
}

function update(req, res) {
  Burger.findById(req.params.id)
  .then(burger => {
    if (burger.owner.equals(req.user.profile._id)) {
      req.body.cheese = !!req.body.cheese
      burger.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/burgers/${burger._id}`)
      })
    } else {
      throw new Error ('Access Denied')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/burgers`)
  })
}

function deleteBurger(req, res) {
  Burger.findById(req.params.id)
  .then(burger => {
    if (burger.owner.equals(req.user.profile._id)) {
      burger.delete()
      .then(() => {
        res.redirect('/burgers')
      })
    } else {
      throw new Error ('Access Denied')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/burgers')
  })
}

function createReview(req, res) {
  req.body.owner = req.user.profile._id
  // Profile.findById(req.user.profile._id)
  // .then(profile => {
  //   profile.reviews.push(req.body)
  //   profile.save()
  // })
  Burger.findById(req.params.id, function(err, burger) {
    burger.reviews.push(req.body)
    burger.save(function(err) {
      res.redirect(`/burgers/${burger._id}`)
    })
  })
}

function deleteReview(req, res) {
  Burger.findById(req.params.id)
  .then(burger => {
    if (burger.owner.equals(req.user.profile._id)) {
      burger.reviews.id(req.params.reviewId).remove()
      burger.save(function(err){
        res.redirect(`/burgers/${burger._id}`)
      })
      console.log(burger.reviews);
    } else {
      throw new Error ('Access Denied')
    }   
  })
  
  
}


export {
  index,
  newBurger as new,
  create,
  show,
  edit,
  update,
  deleteBurger as delete,
  createReview,
  deleteReview
}