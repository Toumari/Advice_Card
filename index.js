const quoteText = document.querySelector(".quote");
const quoteButton = document.querySelector(".quote-btn");
const advice = document.querySelector("small");

quoteButton.addEventListener("click", async () => {
  generateQuote();
});

const generateQuote = async () => {
  const quote = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });

  const quoteData = await quote.json();
  console.log(quoteData);
  quoteText.textContent = quoteData.slip.advice;
  advice.textContent = `Advice #${quoteData.slip.id}`;
};

generateQuote();
