import React, {useState} from "react";

function MyComponent() {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
        "You only live once, but if you do it right, once is enough. - Mae West",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "Life is a journey, not a destination. - Ralph Waldo Emerson"
    ];

    const [randomQuote, setRandomQuote] = useState("");

    return(<div>
                <h2>Random Quote Generator</h2>
                <button onClick={handleQuoteGenerator}>Generate Quote</button>
            </div>
    );
}
export default MyComponent