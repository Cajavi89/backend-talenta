import { Router } from 'express'
import { createText, getTexts } from '../controllers/text.controller'

export const router = Router()

router.get('/', (_req, res) => {
  res.send('hello from root')
})

router.get('/api/texts', getTexts)
router.post('/api/texts', createText)
