import { IText } from '../types/text'

let texts: IText[] = []

export const getTextsService = () => {
  return texts
}

export const createTextService = (text: IText) => {
  texts = [...texts, text]
}
