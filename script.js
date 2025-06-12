const quotes = [
    "Stay positive, work hard, make it happen.",
    "Believe you can and you're halfway there.",
    "Success is not final; failure is not fatal.",
    "Your only limit is your mind.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Don’t stop when you’re tired. Stop when you’re done."
  ];

  function changeQuote() {
    const quoteText = document.getElementById("quoteText");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  }

  // Show a quote immediately
  window.onload = function () {
    changeQuote();
    // Change quote every 5 seconds
    setInterval(changeQuote, 5000);
  };
