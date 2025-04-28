import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "❤️": 0,
    "😂": 0,
    "🔥": 0,
    "😢": 0,
}

export const EmojiSlice = createSlice({
    name: "emojis",
    initialState,
    reducers: {
        incrementEmoji: (state, action) => {
            const emoji = action.payload;
            state[emoji] += 1;
        },
        resetEmojis: () => ({
            "❤️": 0,
            "😂": 0,
            "🔥": 0,
            "😢": 0,
        })
    }
});

export default EmojiSlice.reducer;  
export const { incrementEmoji, resetEmojis } = EmojiSlice.actions;
