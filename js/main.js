// pick a random qoute
var qoutes = [
    {
        qoute: '“Be yourself; everyone else is already taken.”',
        author: '― Oscar Wilde'
    }, 
    {
        qoute: '“So many books, so little time.”',
        author: '― Frank Zappa'
    },
    {
        qoute: '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
        author: '― Albert Einstein'
    },
    {
        qoute: '“A room without books is like a body without a soul.”',
        author: '― Marcus Tullius Cicero'
    },
    {
        qoute: '“If you tell the truth, you do not have to remember anything.”',
        author: '― Mark Twain'
    },
    {
        qoute: '“To live is the rarest thing in the world. Most people exist, that is all.”',
        author: '― Oscar Wilde'
    },
    {
        qoute: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        author: '― Mahatma Gandhi'
    }
]
var lastIndex = -1;
function pickQoute(){
    var randomIndex;
    do {
        randomIndex = Math.trunc(Math.random() * qoutes.length);
    } while(randomIndex === lastIndex);
    
    lastIndex = randomIndex;
    var randomQoute = qoutes[randomIndex];
    console.log(randomIndex);
    document.getElementById("qoute").innerHTML = randomQoute.qoute;
    document.getElementById("author").innerHTML = randomQoute.author;
}