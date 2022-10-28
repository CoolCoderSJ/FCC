window.addEventListener("load", genQuote);

function genQuote() {fetch("https://api.breakingbadquotes.xyz/v1/quotes").then(response => response.json()).then(data => {
    document.getElementById("text").innerHTML = data[0].quote;
    document.getElementById("author").innerHTML = data[0].author;

    document.getElementById("tweet-quote").setAttribute("href", `https://twitter.com/intent/tweet?text=${data[0].quote}`);
  });
}
