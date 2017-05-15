// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//create all global variables
var quote, source, citation, year, tags, rating, fullQuote;
var numOfQuotes = quotes.length;
var usedQuotes = [];
/*infinite loop to find a random number which if is not already used goes through and assigns the object to variables and pushes the 
random number to the usedquotes array and loggs in console and breaks the loop. If the random number is already in the usedquotes itll
run again. If the usedquotes has every quote then itll reset. */
function getRandomQuote () {
    while (true) {
        var randomNum = Math.floor(Math.random() * numOfQuotes);
        if (usedQuotes.indexOf(randomNum) === -1) {
            quote = quotes[randomNum].quote;
            source = quotes[randomNum].source;
            citation = quotes[randomNum].citation;
            year = quotes[randomNum].year;
            tags = quotes[randomNum].tags;
            rating = quotes[randomNum].rating;
            usedQuotes.push(randomNum);
            console.log(quote);
            break;
        } else if (usedQuotes.length === quotes.length) {
            usedQuotes = [];
        } } }
//print the quote by creating different html codes depending on if a citation and year is present or not.
function printQuote () {
    getRandomQuote();
    if (citation !== "" && year !== "") {
        fullQuote = '<p class="quote">' + quote + '</p><p class="source">' + source + '<span class="citation">' + 
        citation + '</span><span class="year">' + year + '</span></p><h3 class="source">' + tags + '</h3><h3 class="source">Rated: ' +
        rating + 'stars</h3>'
    } else if (citation !== "") {
        fullQuote = '<p class="quote">' + quote + '</p><p class="source">' + source + '<span class="year">' + year +
        '</span></p><h3 class="source">' + tags + '</h3><h3 class="source">Rated: ' + rating + 'stars</h3>'
    } else { 
        fullQuote = '<p class="quote">' + quote + '</p><p class="source">' + source + '<span class="citation">' + 
        citation + '</span></p><h3 class="source">' + tags + '</h3><h3 class="source">Rated: ' +
        rating + 'stars</h3>'
    }
    document.getElementById("quote-box").innerHTML = fullQuote;
    //random color generator
    document.body.style.backgroundColor = '#'+Math.random().toString(16).slice(-6);
}
//random quote after every 5 seconds
setInterval(printQuote, 5000);


