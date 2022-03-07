import { Router } from 'express'
import * as burgersCtrl from '../controllers/burgers.js'

const router = Router()

router.get('/', burgersCtrl.index)

export {
  router
}