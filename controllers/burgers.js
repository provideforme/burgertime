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
    title: ""
  })
}

export {
  index,
  newBurger as new,
}