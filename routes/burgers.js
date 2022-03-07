import { Router } from 'express'
import * as burgersCtrl from '../controllers/burgers.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', burgersCtrl.index)
router.get('/new', isLoggedIn, burgersCtrl.new)
router.get('/:id', burgersCtrl.show)
router.post('/', isLoggedIn, burgersCtrl.create)

export {
  router
}