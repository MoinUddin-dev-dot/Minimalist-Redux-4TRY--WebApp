import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { generateQuote } from "./quotes/quotes";
import { incrementEmoji, resetEmojis } from "./emojis/EmojiSlice";

function App() {
  const quote = useSelector((state) => state.quotes.quote);
  const emojis = useSelector((state) => state.emojis);
  const dispatch = useDispatch();

  const handleQuote = () => {
    dispatch(generateQuote())
    dispatch(resetEmojis())
  }

  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex flex-col items-center justify-center min-h-screen p-6 space-y-6">
        <div className="qquote-container bg-white shadow-lg rounded-xl p-6 max-w-xl w-full text-center">
          <p className="quote text-xl font-semibold italic">{quote}</p>
        </div>
        <div className="emoji-container flex space-x-6 text-lg font-medium">
          {Object.entries(emojis).map(([emoji, count]) => (
            <button key={emoji} onClick={()=> dispatch(incrementEmoji(emoji))} className="text-2xl hover:scale-110 transition text-white">
              {emoji} {count}
            </button>
          ))}
        </div>
        <button className="new-quote mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow" onClick={handleQuote}>
          New Quote
        </button>
      </div>
    </>
  );
}

export default App;
