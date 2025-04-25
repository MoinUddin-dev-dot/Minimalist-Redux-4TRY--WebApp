import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "❤️": 0,
    "😂": 0,
    "🔥": 0,
    "😢": 0,
}


export const emojiSlice = createSlice({
    name: "emojis",
    initialState,
    reducers: {
        incrementEmoji: (state, action) => {
            const emoji = action.payload
            state[emoji] += 1
        },
        resetEmojis: () => ({
            "❤️": 0,
            "😂": 0,
            "🔥": 0,
            "😢": 0,
          })
    }
})

export default emojiSlice.reducer
export const { incrementEmoji, resetEmojis} = emojiSlice.actions