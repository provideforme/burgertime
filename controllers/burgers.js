import { Burger } from '../models/burger.js'

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
  req.body.owner = req.user.profile._id
	req.body.cheese = !!req.body.cheese
  Burger.create(req.body)
  .then(burger => {
    res.redirect('/burgers')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/burgers')
  })
}

function show(req, res) {
  Burger.findById(req.params.id)
  .populate("owner")
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

export {
  index,
  newBurger as new,
  create,
  show,
  edit
}