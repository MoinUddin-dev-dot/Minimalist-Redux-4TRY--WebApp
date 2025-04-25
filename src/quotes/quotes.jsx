import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const quotesArray = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The way to get started is to quit talking and begin doing.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "Don't watch the clock; do what it does. Keep going.",
    "You can never plan the future by the past.",
]

const initialState = {
   quote: "CLick to view the quote"
}

export const quoteSlice = createSlice({
    name: 'quotess',
    initialState,
    reducers: {
        generateQuote: (state) => {
            const randomIndex = Math.floor(Math.random() * quotesArray.length);
           state.quote = quotesArray[randomIndex]

        }
    }
})

export default quoteSlice.reducer
export const {generateQuote} = quoteSlice.actions