import { configureStore } from '@reduxjs/toolkit'
import quoteReducer from '../quotes/quotes'
import emojiReducer from '../emojis/EmojiSlice'

export default configureStore({
  reducer: {
    quotes: quoteReducer,
    emojis: emojiReducer
  }
})