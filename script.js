const apiWebsite = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("new-quote");

btn.addEventListener("click", getQuote);

function getQuote() {
   fetch(apiWebsite)
     .then((res) => res.json())
     .then((data) => {
       quote.innerHTML = `"${data.content}"`;
       author.innerHTML = `- ${data.author}`;
     });
 }