const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "The future depends on what you do today. – Mahatma Gandhi",
    "It always seems impossible until it's done. – Nelson Mandela"
  ];

  const quoteBox = document.getElementById('quote-box');

  let index = 0;

  function showQuote() {
    quoteBox.textContent = quotes[index];
    index = (index + 1) % quotes.length;
  }

  showQuote(); // Show initial quote
  setInterval(showQuote, 5000); 