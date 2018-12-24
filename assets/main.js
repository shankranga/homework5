var questions = [
  {
    ques: "Who is the quarterback for the New England Patriots?",
    ans: ["Peter Griffin", "Aaron Rodgers", "Dwight Howard", "Tom Brady"],
    name: "newEngland",
    correct: "Tom Brady",
    divClass: ".newEngland"
  },
  {
    ques: "How many players can be on the field in a football game?",
    ans: ["12", "10", "11", "15"],
    name: "numPlayers",
    correct: "11",
    divClass: ".numPlayers"
  },
  {
    ques:
      "What year did the Houston Texans start playing in the National Football League?",
    ans: ["1995-1996", "1993-1994", "1992-1993", "2015-2016"],
    name: "theRockets",
    correct: "1995-1996",
    divClass: ".theRockets"
  },
  {
    ques: "Who is the starting point guard for the Houston Rockets?",
    ans: [
      "Stephen Curry",
      "Chris Paul",
      "James Harden",
      "Giannis Antetokoumpo"
    ],
    name: "pointGuard",
    correct: "Chris Paul",
    divClass: ".pointGuard"
  },
  {
    ques: "Who won the NBA championship last season?",
    ans: ["The Rockets", "The Cavaliers", "The Lakers", "The Warriors"],
    name: "nbaChamp",
    correct: "The Warriors",
    divClass: ".nbaChamp"
  }
]; // Questions Object End

var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 60;

  function myClock() {
    document.getElementById("demo").innerHTML = --c;
    if (c == 0) {
      clearInterval(myTimer);
      alert("Time is up!");
    }
  }
}
$("#sub-button").on("click", function() {
  clearInterval(myTimer);
});
//Grading Functions
var correctAnswers = 0;
var wrongAnswers = 0;
