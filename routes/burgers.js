import { Router } from 'express'
import * as burgersCtrl from '../controllers/burgers.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', burgersCtrl.index)
router.get('/new', isLoggedIn, burgersCtrl.new)
router.get('/:id', burgersCtrl.show)
router.get('/:id/edit', isLoggedIn, burgersCtrl.edit)
router.post('/', isLoggedIn, burgersCtrl.create)
router.post('/:id/reviews', isLoggedIn, burgersCtrl.createReview)
router.put('/:id', isLoggedIn, burgersCtrl.update)
router.delete('/:id', isLoggedIn, burgersCtrl.delete)
router.delete('/:id/reviews/:reviewId', isLoggedIn, burgersCtrl.deleteReview)

export {
  router
}