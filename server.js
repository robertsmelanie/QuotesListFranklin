const express = require('express');
const app = express();
const PORT = 3000;

const quotes = [
    { quote: "An investment in knowledge always pays the best interest." },
    { quote: "Tell me and I forget, teach me and I may remember, involve me and I learn." },
    { quote: "Being ignorant is not so much a shame as being unwilling to learn." },
    { quote: "Lost time is never found again." },
    { quote: "Early to bed and early to rise, makes a man healthy, wealthy, and wise." },
    { quote: "You may delay, but time will not." },
    { quote: "Beware of little expenses; a small leak will sink a great ship." },
    { quote: "A penny saved is a penny earned." },
    { quote: "Rather go to bed supperless than rise in debt." },
    { quote: "Well done is better than well said." },
    { quote: "Glass, china, and reputation are easily cracked, and never well mended." },
    { quote: "He that lies down with dogs shall rise up with fleas." },
    { quote: "They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety." },
];

app.get('/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json(randomQuote);
});

app.listen(PORT, () => {
    console.log(`Quote API running at http://localhost:${PORT}`);
});