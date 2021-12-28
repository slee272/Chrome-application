const quotes = [
  {
    quote:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    autor: "Marie Curie",
  },
  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    autor: "Buddha",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    autor: "George Bernard Shaw",
  },
  {
    quote: "We do not remember days, we remember moments.",
    autor: "Cesare Pavese",
  },
  {
    quote: "Life is what happens while you are busy making other plans.",
    autor: "John Lennon",
  },
  {
    quote: "Don't go through life, grow through life.",
    autor: "Eric Butterworth",
  },
  {
    quote:
      "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
    autor: "Sholom Aleichem",
  },
];

const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
autor.innerText = todaysQuote.autor;
