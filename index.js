console.log("Hello")
// fucntion to change background color
let colorArr = ["#371B58", "#570A57", "#2D4263", "#041C32", "#916BBF", "#261C2C", "#082032", "#E2703A"]
let colorlen = colorArr.length

function changeImg() {
    let randomImg = Math.floor(Math.random() * colorlen)
    document.body.style.backgroundColor = colorArr[randomImg]

}

// function to change text color
let textColor = ["#570A57", "#2D4263", "#371B58", "#041C32", "#082032", "#916BBF", "#E2703A", "#261C2C"]
let textlen = textColor.length
function Textcol() {
    let randomcol = Math.floor(Math.random() * textlen)
    document.getElementById("displayQuote").style.color = textColor[randomcol]

}

// fucntion to change btn background color
// let btnColor = ["#570A57", "#2D4263", "#371B58", "#041C32", "#082032", "#916BBF", "#E2703A", "#261C2C"]
// let btnlen = btnColor.length
// function btncol() {
//     let rbtncol = Math.floor(Math.random() * btnlen)
//     document.getElementById("Changebtn").style.color = btnColor[rbtncol]
// }


let quotesArr = ["“When you have a dream, you`ve got to grab it and never let go.”<br>-Carol Burnett",
    "“Keep your face always toward the sunshine, and shadows will fall behind you.”<br>—Walt Whitman",
    "“Success is not final, failure is not fatal: it is the courage to continue that counts.”<br>-Winston Churchill",
    "“Believe you can and you’re halfway there.”–Theodore Roosevelt", "“We must let go of the life we have planned, so as to accept the one that is waiting for us.”—Joseph Campbell", "“Life is like riding a bicycle. To keep your balance, you must keep moving.”–Albert Einstein", "“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz", "“Do what you feel in your heart to be right – for you’ll be criticized anyway.”― Eleanor Roosevelt", "“Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV", "“If something is important enough, even if the odds are stacked against you, you should still do it.” – Elon Musk", "“Your passion is waiting for your courage to catch up.” – Isabelle Lafleche", "“Some people want it to happen, some wish it would happen, others make it happen.” – Michael Jordan", "“Great things are done by a series of small things brought together” – Vincent Van Gogh",
    "“The hard days are what make you stronger.” – Aly Raisman", "“Keep your eyes on the stars, and your feet on the ground.” – Theodore Roosevelt"
    , "“The hard days are what make you stronger.” – Aly Raisman", "“Don’t limit your challenges. Challenge your limits.”",
    "“Dreams don’t work unless you do.” – John C. Maxwell", "“Keep your face always toward the sunshine – and shadows will fall behind you.” – Walt Whitman", "“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.” – Pele",
    "“If you want to fly give up everything that weighs you down.” – Buddha", "“You don’t need to see the whole staircase, just take the first step.” – Martin Luther King Jr.",
    "“You can’t go back and change the beginning, but you can start where you are and change the ending.” – C.S. Lewis"]



let length = quotesArr.length
function getQuote() {
    var randomnumber = Math.floor(Math.random() * length);
    // var randomcol = Math.floor(Math.random() * length);
    document.getElementById("displayQuote").innerHTML = quotesArr[randomnumber]
    // document.getElementById("displayQuote").innerHTM = 

}




