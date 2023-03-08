import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { createTextService, getTextsService } from '../services/text.service'

// get all texts
export const getTexts = (_req: Request, res: Response) => {
  const allTexts = getTextsService()
  res.status(200).json(allTexts)
}

// create a new text
export const createText = (req: Request, res: Response) => {
  try {
    const { text } = req.body
    console.log('EL TEXXTO', text)
    if (!text) throw new Error('text is missing')

    const newText = createTextService({
      id: uuidv4(),
      text,
    })

    res.status(201).json({ message: 'Text Created', newText })
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ error: error.message })
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
