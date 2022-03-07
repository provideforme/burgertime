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

export {
  index
}