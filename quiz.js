var questionBank= [
    {
        question : 'An HTML document can contain___ ',
        option : ['Attributes','Tags','Raw text','All the of these'],
        answer : 'All the of these'
    },
    {
        question : 'A page design in HTML is called___',
        option : ['Application','Cover page','Front-end','Web page'],
        answer : 'Web page'
    },
    {
        question : 'An HTML document is saved with the ___ extension.',
        option : ['.htl','.html','.hml','.htnl'],
        answer : '.html'
    },
    {
        question : 'Choose the correct HTML tag for a large title.',
        option : ['H1','Heading','Head','H6'],
        answer : 'H1'
    },
    {
        question : 'HTML is consider as ___ language.',
        option : ['Programming language','OOP language','High level language','Markup language'],
        answer : 'Markup language'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
       }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
   }

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
       {   
        score= score+1;
        document.getElementById(e.id);
       }
    else{
        document.getElementById(e.id);
        }
    setTimeout(nextQuestion,300);
  }

function nextQuestion(){
    if(i<questionBank.length-1)
      {
        i=i+1;
        displayQuestion();
      }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
        }
  }
 next.addEventListener('click',nextQuestion);

function backToQuiz(){
    location.reload();
   }  

displayQuestion();