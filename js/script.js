// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//create all global variables
var quote, source, citation, date, tags, rating, fullQuote;
var numOfQuotes = quotes.length;
var usedQuotes = [];
var loadQuote = document.getElementById("loadQuote");

/*infinite loop to find a random number which if is not already used goes through and assigns the object to variables and pushes the 
random number to the usedquotes array and loggs in console and breaks the loop. If the random number is already in the usedquotes itll
run again. If the usedquotes has every quote > reset. */
function getRandomQuote () {
    while (true) {
        var randomNum = Math.floor(Math.random() * numOfQuotes);
        if (usedQuotes.indexOf(randomNum) === -1) {
            quote = quotes[randomNum].quote;
            source = quotes[randomNum].source;
            citation = quotes[randomNum].citation;
            date = quotes[randomNum].date;
            tags = quotes[randomNum].tags;
            rating = quotes[randomNum].rating;
            usedQuotes.push(randomNum);
            console.log(quote);
            break;
        } else if (usedQuotes.length === quotes.length) {
            usedQuotes = [];
        } } }

//print the quote by creating different html codes depending on if a citation and date is present or not.
function printQuote () {
    getRandomQuote();
    if (citation !== "" && date !== "") {
        fullQuote = '<p class="quote">' + quote + '</p><p class="source">' + source + '<span class="citation">' + 
        citation + '</span><span class="year">' + date + '</span></p><p class="source">' + tags + ', Rated: ' +
        rating + ' stars<p>'
    } else if (citation !== "") {
        fullQuote = '<p class="quote">' + quote + '</p><p class="source">' + source + '<span class="year">' + date +
        '</span></p><p class="source">' + tags + ', Rated: ' + rating + ' stars</p>'
    } else { 
        fullQuote = '<p class="quote">' + quote + '</p><p class="source">' + source + '<span class="citation">' + 
        citation + '</span></p><p class="source">' + tags + ', Rated: ' + rating + ' stars</p>'
    }
    document.getElementById("quote-box").innerHTML = fullQuote;
    //random color generator
    randomColor = '#'+Math.random().toString(16).slice(-6);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("loadQuote").style.backgroundColor = randomColor;
}

//random quote after every 15 seconds. This takes into account Unique quotes also.
setInterval(printQuote, 15000);