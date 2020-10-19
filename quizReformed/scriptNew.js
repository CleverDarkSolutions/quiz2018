//------------------------PAGE CONTENT----------------------------------
var form = '<div class="questionAdd"> Podaj pytanie:'+'<br>'+
            '<input id="questionId" type="text" value=" "><br>'+
            'Podaj odpowiedzi'+'<br>'+
            '<input id="answerA" type="text" value=" ">'+'<br>'+
            '<input id="answerB" type="text" value=" ">'+'<br>'+
            '<input id="answerC" type="text" value=" ">'+'<br>'+
            'Podaj poprawną odpowiedź '+'<br>'+
            '<select class="selectDesign" id="correctAnswer">'+
            '<option class="selectDesign" value='+1+'>A</option>'+
            '<option class="selectDesign" value='+2+'>B</option>'+
            '<option class="selectDesign" value='+3+'>C</option>'+
            '</select>'+'<br>'+
            '<div class="submitAnswers" id="submitAnswers" onclick="addQuestion();">Dodaj</div>'

var homeHTML = '<div class="starter" id="starter">'+
'<div class="pageTitle" id="pageTitle">Witaj ponownie</div>'+
'<div class="firstPage" id="firstPage">'+

'<div class="firstBox" id="firstBox">'+
'<div class="playGame" id="playGame" onclick="questionSelect();"><p>Rozpocznij quiz</p></div>'+
'<div class="playTest" id="playTest" onclick="loadTest();"><p>Rozpocznij test </p></div>'+
'<div class="addQuestion" id="addQuestion"><p onclick="questionAddMenu();">Dodaj pytania</p></div>'+
'<div class="questionList" id="questionList" onclick="questionList();"><p>Lista pytań</p></div>'+
  '</div></div>';

  var settingsHTML = '<div class="settingsMenu" id="settingsMenu">'+
  '<div class="clearLocalStorage" id="clearLocalStorage" onclick="clearLocalStorage();">Wyczyść pytania</div>'+'</div>';

var buttonAnswer = "<div class='checkButton' id='checkButton'>Odpowiedz</div>";
var buttonAnswerTest = "<div class='checkButton' id='checkButton'>Następne pytanie</div>";
//------------------------------------------------------------------------------

//-----------------------NAVIGATION--------------------
function homeScreen()
{
  document.getElementById('starter').innerHTML=homeHTML;
}

function settingsScreen()
{
  document.getElementById('starter').innerHTML=settingsHTML;
}
//------------------------------------------------------

//----------------------UTILITY-------------------------
function clearLocalStorage()
{
  localStorage.clear();
}

function removeQuestion(removeNr)
{
  localStorage.removeItem('question'+removeNr);
  console.log('question'+removeNr);
  $('#smallSquare'+removeNr).css('opacity','0.5');
  removeList();
}

function shuffleArray(o)
{

 for(var j, x, i = o.length; i; j = parseInt( (Math.random() * i) + 1), x = o[--i], o[i] = o[j], o[j] = x);

 return o;
}

//------------------CHANGE THEME------------------------
function changeTheme(theme)
{
  $('body').removeClass('theme1');
  $('body').removeClass('theme2');
  $('body').removeClass('theme3');

  $('.smallSquare').removeClass('theme1');
  $('.smallSquare').removeClass('theme2');
  $('.smallSquare').removeClass('theme3');

  $('body').addClass('theme'+theme);
  $('.smallSquare').addClass('theme'+theme);
}
//----------------------------------------------------

//--------------------REMOVE QUESTION-----------------
function removeList()
{
  var index = localStorage.getItem('i');
  var number = 1;
  document.getElementById('starter').innerHTML = "<div class='questionListContent' id='questionListContent'><div class='questionDisplay' id='questionDisplay'></div></div> ";

  while(number<=index)
  {
    var smallSquare = "<div class='smallSquare theme1' id='smallSquare"+number+"'>"+number+"</div>";
    document.getElementById('questionListContent').innerHTML += smallSquare;
    number++;


  }

  document.getElementById('smallSquare1').onclick = function(){removeQuestion(1)};
  document.getElementById('smallSquare2').onclick = function(){removeQuestion(2)};
  document.getElementById('smallSquare3').onclick = function(){removeQuestion(3)};
  document.getElementById('smallSquare4').onclick = function(){removeQuestion(4)};
  document.getElementById('smallSquare5').onclick = function(){removeQuestion(5)};
  document.getElementById('smallSquare6').onclick = function(){removeQuestion(6)};
  document.getElementById('smallSquare7').onclick = function(){removeQuestion(7)};
  document.getElementById('smallSquare8').onclick = function(){removeQuestion(8)};
  document.getElementById('smallSquare9').onclick = function(){removeQuestion(9)};
  document.getElementById('smallSquare10').onclick = function(){removeQuestion(10)};
  document.getElementById('smallSquare11').onclick = function(){removeQuestion(11)};
  document.getElementById('smallSquare12').onclick = function(){removeQuestion(12)};
  document.getElementById('smallSquare13').onclick = function(){removeQuestion(13)};
  document.getElementById('smallSquare14').onclick = function(){removeQuestion(14)};
  document.getElementById('smallSquare15').onclick = function(){removeQuestion(15)};
  document.getElementById('smallSquare16').onclick = function(){removeQuestion(16)};
  document.getElementById('smallSquare17').onclick = function(){removeQuestion(17)};
  document.getElementById('smallSquare18').onclick = function(){removeQuestion(18)};
  document.getElementById('smallSquare19').onclick = function(){removeQuestion(19)};
  document.getElementById('smallSquare20').onclick = function(){removeQuestion(20)};
  document.getElementById('smallSquare21').onclick = function(){removeQuestion(21)};
  document.getElementById('smallSquare22').onclick = function(){removeQuestion(22)};
  document.getElementById('smallSquare23').onclick = function(){removeQuestion(23)};
  document.getElementById('smallSquare24').onclick = function(){removeQuestion(24)};
  document.getElementById('smallSquare25').onclick = function(){removeQuestion(25)};
  document.getElementById('smallSquare26').onclick = function(){removeQuestion(26)};
  document.getElementById('smallSquare27').onclick = function(){removeQuestion(27)};
  document.getElementById('smallSquare28').onclick = function(){removeQuestion(28)};
  document.getElementById('smallSquare29').onclick = function(){removeQuestion(29)};
  document.getElementById('smallSquare30').onclick = function(){removeQuestion(30)};
  document.getElementById('smallSquare31').onclick = function(){removeQuestion(31)};
  document.getElementById('smallSquare32').onclick = function(){removeQuestion(32)};
  document.getElementById('smallSquare33').onclick = function(){removeQuestion(33)};
  document.getElementById('smallSquare34').onclick = function(){removeQuestion(34)};
  document.getElementById('smallSquare35').onclick = function(){removeQuestion(35)};
  document.getElementById('smallSquare36').onclick = function(){removeQuestion(36)};
  document.getElementById('smallSquare37').onclick = function(){removeQuestion(37)};
  document.getElementById('smallSquare38').onclick = function(){removeQuestion(38)};
  document.getElementById('smallSquare39').onclick = function(){removeQuestion(39)};
  document.getElementById('smallSquare40').onclick = function(){removeQuestion(40)};
  document.getElementById('smallSquare41').onclick = function(){removeQuestion(41)};
  document.getElementById('smallSquare42').onclick = function(){removeQuestion(42)};
  document.getElementById('smallSquare43').onclick = function(){removeQuestion(43)};
  document.getElementById('smallSquare44').onclick = function(){removeQuestion(44)};
  document.getElementById('smallSquare45').onclick = function(){removeQuestion(45)};
  document.getElementById('smallSquare46').onclick = function(){removeQuestion(46)};
  document.getElementById('smallSquare47').onclick = function(){removeQuestion(47)};
  document.getElementById('smallSquare48').onclick = function(){removeQuestion(48)};
  document.getElementById('smallSquare49').onclick = function(){removeQuestion(49)};
  document.getElementById('smallSquare50').onclick = function(){removeQuestion(50)};
  document.getElementById('smallSquare51').onclick = function(){removeQuestion(51)};
  document.getElementById('smallSquare52').onclick = function(){removeQuestion(52)};
  document.getElementById('smallSquare53').onclick = function(){removeQuestion(53)};
  document.getElementById('smallSquare54').onclick = function(){removeQuestion(54)};
  document.getElementById('smallSquare55').onclick = function(){removeQuestion(55)};
  document.getElementById('smallSquare56').onclick = function(){removeQuestion(56)};
  document.getElementById('smallSquare57').onclick = function(){removeQuestion(57)};
  document.getElementById('smallSquare58').onclick = function(){removeQuestion(58)};
  document.getElementById('smallSquare59').onclick = function(){removeQuestion(59)};

}

//----------------ADD QUESTION--------------------------

var questionArray = [];

var i = 0;
i = localStorage.getItem('i');
function questionAddMenu()
{
  document.getElementById('starter').innerHTML= form;
}

function addQuestion()
{
    var questionContent = document.getElementById('questionId').value;
    var answerA = document.getElementById('answerA').value;
    var answerB = document.getElementById('answerB').value;
    var answerC = document.getElementById('answerC').value;
    var correctAnswer = document.getElementById('correctAnswer').value;

    if(questionContent!=" " && answerA!= " " && answerB!= " " && answerC!= " ")
    {
    i++;
    questionArray[i] =
    {
      content : questionContent,
      answerOne : answerA,
      answerTwo : answerB,
      answerThree : answerC,
      correctAnswer : correctAnswer
    }
    localStorage.setItem('i', i);
    var index = localStorage.getItem('i');

    var obj = JSON.stringify( questionArray[i] );
      localStorage.setItem('question'+i, obj);
      document.getElementById('starter').innerHTML = form;
    }

}
//----------------------------------------------------------------


//---------------------ACTUAL GAME---------------------
var nr = 1;
var selectedA = false;
var selectedB = false;
var selectedC = false;
var answerGiven = 0;
var playerScore = 0;

var examArray = [];
var examTemp = 0;

var normalArray = [];
var normalTemp = 1;


function displayQuestion(questionNumber)
{
  var item = localStorage.getItem('question'+questionNumber);
  var itemParsed = (JSON.parse( item ));
  var question = itemParsed.content;
  var answerOne = itemParsed.answerOne;
  var answerTwo = itemParsed.answerTwo;
  var answerThree = itemParsed.answerThree;
  var correctValue = itemParsed.correctAnswer;

  returnedQuestionNumber = questionNumber;

  document.getElementById('starter').innerHTML = "<div class='questionPlacement'>"+question+"<br><br>"+
  '<div class="answerButton" id="buttonOne">Odpowiedź A</div>'+'<div id="selectionOne" class="answerContent" onclick="selectAnswerA();">'+answerOne+'</div>'+
  '<div class="answerButton" id="buttonTwo">Odpowiedź B</div>'+'<div id="selectionTwo" class="answerContent" onclick="selectAnswerB();">'+answerTwo+'</div>'+
  '<div class="answerButton" id="buttonThree">Odpowiedź C</div>'+'<div id="selectionThree" class="answerContent" onclick="selectAnswerC();">'+answerThree+'</div>'+
  "<div class='checkButton' id='checkButton' onclick='checkAnswer("+correctValue+")'></div>"+
  "<div class='nextQuestion' id='nextQuestion' onclick='loadQuestion();'>Następne pytanie</div>";

   nr = questionNumber;

}

function questionSelect()
{
  var index = localStorage.getItem('i');
  var number = 1;
  document.getElementById('starter').innerHTML = "<div class='questionListContent' id='questionListContent'><div class='questionDisplay' id='questionDisplay'></div></div> ";

  while(number<=index)
  {
    var smallSquare = "<div class='smallSquare theme1' id='smallSquare"+number+"'>"+number+"</div>";
    document.getElementById('questionListContent').innerHTML += smallSquare;
    number++;


  }

  document.getElementById('smallSquare1').onclick = function(){displayQuestion(1)};
  document.getElementById('smallSquare2').onclick = function(){displayQuestion(2)};
  document.getElementById('smallSquare3').onclick = function(){displayQuestion(3)};
  document.getElementById('smallSquare4').onclick = function(){displayQuestion(4)};
  document.getElementById('smallSquare5').onclick = function(){displayQuestion(5)};
  document.getElementById('smallSquare6').onclick = function(){displayQuestion(6)};
  document.getElementById('smallSquare7').onclick = function(){displayQuestion(7)};
  document.getElementById('smallSquare8').onclick = function(){displayQuestion(8)};
  document.getElementById('smallSquare9').onclick = function(){displayQuestion(9)};
  document.getElementById('smallSquare10').onclick = function(){displayQuestion(10)};
  document.getElementById('smallSquare11').onclick = function(){displayQuestion(11)};
  document.getElementById('smallSquare12').onclick = function(){displayQuestion(12)};
  document.getElementById('smallSquare13').onclick = function(){displayQuestion(13)};
  document.getElementById('smallSquare14').onclick = function(){displayQuestion(14)};
  document.getElementById('smallSquare15').onclick = function(){displayQuestion(15)};
  document.getElementById('smallSquare16').onclick = function(){displayQuestion(16)};
  document.getElementById('smallSquare17').onclick = function(){displayQuestion(17)};
  document.getElementById('smallSquare18').onclick = function(){displayQuestion(18)};
  document.getElementById('smallSquare19').onclick = function(){displayQuestion(19)};
  document.getElementById('smallSquare20').onclick = function(){displayQuestion(20)};
  document.getElementById('smallSquare21').onclick = function(){displayQuestion(21)};
  document.getElementById('smallSquare22').onclick = function(){displayQuestion(22)};
  document.getElementById('smallSquare23').onclick = function(){displayQuestion(23)};
  document.getElementById('smallSquare24').onclick = function(){displayQuestion(24)};
  document.getElementById('smallSquare25').onclick = function(){displayQuestion(25)};
  document.getElementById('smallSquare26').onclick = function(){displayQuestion(26)};
  document.getElementById('smallSquare27').onclick = function(){displayQuestion(27)};
  document.getElementById('smallSquare28').onclick = function(){displayQuestion(28)};
  document.getElementById('smallSquare29').onclick = function(){displayQuestion(29)};
  document.getElementById('smallSquare30').onclick = function(){displayQuestion(30)};
  document.getElementById('smallSquare31').onclick = function(){displayQuestion(31)};
  document.getElementById('smallSquare32').onclick = function(){displayQuestion(32)};
  document.getElementById('smallSquare33').onclick = function(){displayQuestion(33)};
  document.getElementById('smallSquare34').onclick = function(){displayQuestion(34)};
  document.getElementById('smallSquare35').onclick = function(){displayQuestion(35)};
  document.getElementById('smallSquare36').onclick = function(){displayQuestion(36)};
  document.getElementById('smallSquare37').onclick = function(){displayQuestion(37)};
  document.getElementById('smallSquare38').onclick = function(){displayQuestion(38)};
  document.getElementById('smallSquare39').onclick = function(){displayQuestion(39)};
  document.getElementById('smallSquare40').onclick = function(){displayQuestion(40)};
  document.getElementById('smallSquare41').onclick = function(){displayQuestion(41)};
  document.getElementById('smallSquare42').onclick = function(){displayQuestion(42)};
  document.getElementById('smallSquare43').onclick = function(){displayQuestion(43)};
  document.getElementById('smallSquare44').onclick = function(){displayQuestion(44)};
  document.getElementById('smallSquare45').onclick = function(){displayQuestion(45)};
  document.getElementById('smallSquare46').onclick = function(){displayQuestion(46)};
  document.getElementById('smallSquare47').onclick = function(){displayQuestion(47)};
  document.getElementById('smallSquare48').onclick = function(){displayQuestion(48)};
  document.getElementById('smallSquare49').onclick = function(){displayQuestion(49)};
  document.getElementById('smallSquare50').onclick = function(){displayQuestion(50)};
  document.getElementById('smallSquare51').onclick = function(){displayQuestion(51)};
  document.getElementById('smallSquare52').onclick = function(){displayQuestion(52)};
  document.getElementById('smallSquare53').onclick = function(){displayQuestion(53)};
  document.getElementById('smallSquare54').onclick = function(){displayQuestion(54)};
  document.getElementById('smallSquare55').onclick = function(){displayQuestion(55)};
  document.getElementById('smallSquare56').onclick = function(){displayQuestion(56)};
  document.getElementById('smallSquare57').onclick = function(){displayQuestion(57)};
  document.getElementById('smallSquare58').onclick = function(){displayQuestion(58)};
  document.getElementById('smallSquare59').onclick = function(){displayQuestion(59)};

}

function prepareQuestions()
{
  while(normalTemp<=i)
  {
    var minor = localStorage.getItem('question'+normalTemp);
    var parsedMinor = (JSON.parse( minor ));
    normalArray[normalTemp] = parsedMinor;
    normalTemp++;
  }

}

function prepareTest()
{
  while(examTemp<=i)
  {
  var securityVariable = "";
  var minor = localStorage.getItem('question'+examTemp);
  var parsedMinor = (JSON.parse( minor ));
  examArray[examTemp] = parsedMinor;
  examTemp++;

    securityVariable = examArray[1];
  }
  console.log(examArray[examTemp]);

//TU BYŁY NIEZŁE JAJA
  shuffleArray(examArray);
  examArray[1] = securityVariable;
}

function checkAnswerTest(correctVal)
{
  if(answerGiven==correctVal)
  {
    playerScore++;
    document.getElementById('checkButton').onclick = null;
    document.getElementById('buttonOne').onclick = null;
    document.getElementById('buttonTwo').onclick = null;
    document.getElementById('buttonThree').onclick = null;
  }

  else
  {
    playerScore--;
    document.getElementById('checkButton').onclick = null;
    document.getElementById('buttonOne').onclick = null;
    document.getElementById('buttonTwo').onclick = null;
    document.getElementById('buttonThree').onclick = null;

  }
  if(correctVal==1)
  {
    $('#selectionOne').css('border', '5px green solid');
    $('#selectionTwo').css('border', '5px red solid');
    $('#selectionThree').css('border', '5px red solid');
  }

  if(correctVal==2)
  {
    $('#selectionOne').css('border', '5px red solid');
    $('#selectionTwo').css('border', '5px green solid');
    $('#selectionThree').css('border', '5px red solid');
  }

  if(correctVal==3)
  {
    $('#selectionOne').css('border', '5px red solid');
    $('#selectionTwo').css('border', '5px red solid');
    $('#selectionThree').css('border', '5px green solid');
  }
    $('.checkButton').css('display', 'none');

  setTimeout(function(){loadRandomQuestion();},5000);
}

function checkAnswer(correctVal)
{
  if(answerGiven==correctVal)
  {
    playerScore++;
  }

  else
  {
    playerScore--;
  }

  if(correctVal==1)
  {
    $('#selectionOne').css('border', '5px green solid');
    $('#selectionTwo').css('border', '5px red solid');
    $('#selectionThree').css('border', '5px red solid');
  }

  if(correctVal==2)
  {
    $('#selectionOne').css('border', '5px red solid');
    $('#selectionTwo').css('border', '5px green solid');
    $('#selectionThree').css('border', '5px red solid');
  }

  if(correctVal==3)
  {
    $('#selectionOne').css('border', '5px red solid');
    $('#selectionTwo').css('border', '5px red solid');
    $('#selectionThree').css('border', '5px green solid');
  }
    $('.checkButton').css('display', 'none');


}

function checkButton()
{
  document.getElementById('checkButton').innerHTML = buttonAnswer;
  $('.checkButton').css('display', 'block');
}

function selectAnswerA()
{
  $('#selectionOne').css('border', '5px gold solid');
  $('#selectionTwo').css('border', '2px white solid');
  $('#selectionThree').css('border', '2px white solid');
  selectedA = true;
  selectedB = false;
  selectedC = false;

  answerGiven=1;

  checkButton();
}

function selectAnswerB()
{
  $('#selectionOne').css('border', '2px white solid');
  $('#selectionTwo').css('border', '5px gold solid');
  $('#selectionThree').css('border', '2px white solid');
  selectedA = false;
  selectedB = true;
  selectedC = false;

  answerGiven=2;

  checkButton();
}

function selectAnswerC()
{
  $('#selectionOne').css('border', '2px white solid');
  $('#selectionTwo').css('border', '2px white solid');
  $('#selectionThree').css('border', '5px gold solid');
  selectedA = false;
  selectedB = false;
  selectedC = true;

  answerGiven=3;

  checkButton();
}

function loadQuestion()
{
  var item = localStorage.getItem('question'+nr);
  var itemParsed = (JSON.parse( item ));
  var question = itemParsed.content;
  var answerOne = itemParsed.answerOne;
  var answerTwo = itemParsed.answerTwo;
  var answerThree = itemParsed.answerThree;
  var correctValue = itemParsed.correctAnswer;


  document.getElementById('starter').innerHTML = "<div class='questionPlacement'>"+question+"<br><br>"+
  '<div class="answerButton" id="buttonOne">Odpowiedź A</div>'+'<div id="selectionOne" class="answerContent" onclick="selectAnswerA();">'+answerOne+'</div>'+
  '<div class="answerButton" id="buttonTwo">Odpowiedź B</div>'+'<div id="selectionTwo" class="answerContent" onclick="selectAnswerB();">'+answerTwo+'</div>'+
  '<div class="answerButton" id="buttonThree">Odpowiedź C</div>'+'<div id="selectionThree" class="answerContent" onclick="selectAnswerC();">'+answerThree+'</div>'+
  "<div class='checkButton' id='checkButton' onclick='checkAnswer("+correctValue+")'></div>"+
  "<div class='nextQuestion' id='nextQuestion' onclick='loadQuestion();'>Następne pytanie</div>";

   console.log(nr);
   nr++;

}

function startGame()
{
  document.getElementById('starter').innerHTML="<div class='board' onclick='loadQuestion();'>Zacznij naukę</div>";

}
//-----------------------------------------------------

function loadTest()
{
  prepareTest();
  loadRandomQuestion();
}

function loadCasual()
{
  prepareQuestions();
  questionSelect();
}

function loadRandomQuestion()
{
  var itemParsed = examArray[nr];
  var question = itemParsed.content;
  var answerOne = itemParsed.answerOne;
  var answerTwo = itemParsed.answerTwo;
  var answerThree = itemParsed.answerThree;
  var correctValue = itemParsed.correctAnswer;



  document.getElementById('starter').innerHTML = "<div class='questionPlacement'>"+question+"<br><br>"+
  '<div class="answerButton" id="buttonOne">Odpowiedź A</div>'+'<div id="selectionOne" class="answerContent" onclick="selectAnswerA();">'+answerOne+'</div>'+
  '<div class="answerButton" id="buttonTwo">Odpowiedź B</div>'+'<div id="selectionTwo" class="answerContent" onclick="selectAnswerB();">'+answerTwo+'</div>'+
  '<div class="answerButton" id="buttonThree">Odpowiedź C</div>'+'<div id="selectionThree" class="answerContent" onclick="selectAnswerC();">'+answerThree+'</div>'+
  "<div class='checkButton' id='checkButton' onclick='checkAnswerTest("+correctValue+")'>Następne pytanie</div>";


   nr++;
}

//------------------QUESTION LIST--------------------------------

function displaySquareQuestion(nr)
{
  var itemParsed = normalArray[nr];
  var question = itemParsed.content;
  var answerOne = itemParsed.answerOne;
  var answerTwo = itemParsed.answerTwo;
  var answerThree = itemParsed.answerThree;
  var correctValue = itemParsed.correctAnswer;

  document.getElementById('questionDisplay').innerHTML = '<div class="questionDisplayBackground">Pytanie'+question+'</div>'+
  '<div class="questionDisplayBackground">Odpowiedz A'+'<br>'+answerOne+'</div>'+
  '<div class="questionDisplayBackground">Odpowiedz B'+'<br>'+answerTwo+'</div>'+
  '<div class="questionDisplayBackground">Odpowiedz C'+'<br>'+answerThree+'</div>'+
  '<div class="questionDisplayBackground">Poprawna'+'<br>'+correctValue+'</div>';
  console.log(nr);

}


function questionList()
{
  prepareQuestions();
  var index = localStorage.getItem('i');
  var number = 1;
  document.getElementById('starter').innerHTML = "<div class='questionListContent' id='questionListContent'><div class='questionDisplay' id='questionDisplay'></div></div> ";

  while(number<=index)
  {
    var smallSquare = "<div class='smallSquare theme1' id='smallSquare"+number+"'>"+number+"</div>";
    document.getElementById('questionListContent').innerHTML += smallSquare;
    number++;


  }

  document.getElementById('smallSquare1').onmouseover = function(){displaySquareQuestion(1)};
  document.getElementById('smallSquare2').onmouseover = function(){displaySquareQuestion(2)};
  document.getElementById('smallSquare3').onmouseover = function(){displaySquareQuestion(3)};
  document.getElementById('smallSquare4').onmouseover = function(){displaySquareQuestion(4)};
  document.getElementById('smallSquare5').onmouseover = function(){displaySquareQuestion(5)};
  document.getElementById('smallSquare6').onmouseover = function(){displaySquareQuestion(6)};
  document.getElementById('smallSquare7').onmouseover = function(){displaySquareQuestion(7)};
  document.getElementById('smallSquare8').onmouseover = function(){displaySquareQuestion(8)};
  document.getElementById('smallSquare9').onmouseover = function(){displaySquareQuestion(9)};
  document.getElementById('smallSquare10').onmouseover = function(){displaySquareQuestion(10)};
  document.getElementById('smallSquare11').onmouseover = function(){displaySquareQuestion(11)};
  document.getElementById('smallSquare12').onmouseover = function(){displaySquareQuestion(12)};
  document.getElementById('smallSquare13').onmouseover = function(){displaySquareQuestion(13)};
  document.getElementById('smallSquare14').onmouseover = function(){displaySquareQuestion(14)};
  document.getElementById('smallSquare15').onmouseover = function(){displaySquareQuestion(15)};
  document.getElementById('smallSquare16').onmouseover = function(){displaySquareQuestion(16)};
  document.getElementById('smallSquare17').onmouseover = function(){displaySquareQuestion(17)};
  document.getElementById('smallSquare18').onmouseover = function(){displaySquareQuestion(18)};
  document.getElementById('smallSquare19').onmouseover = function(){displaySquareQuestion(19)};
  document.getElementById('smallSquare20').onmouseover = function(){displaySquareQuestion(20)};
  document.getElementById('smallSquare21').onmouseover = function(){displaySquareQuestion(21)};
  document.getElementById('smallSquare22').onmouseover = function(){displaySquareQuestion(22)};
  document.getElementById('smallSquare23').onmouseover = function(){displaySquareQuestion(23)};
  document.getElementById('smallSquare24').onmouseover = function(){displaySquareQuestion(24)};
  document.getElementById('smallSquare25').onmouseover = function(){displaySquareQuestion(25)};
  document.getElementById('smallSquare26').onmouseover = function(){displaySquareQuestion(26)};
  document.getElementById('smallSquare27').onmouseover = function(){displaySquareQuestion(27)};
  document.getElementById('smallSquare28').onmouseover = function(){displaySquareQuestion(28)};
  document.getElementById('smallSquare29').onmouseover = function(){displaySquareQuestion(29)};
  document.getElementById('smallSquare30').onmouseover = function(){displaySquareQuestion(30)};
  document.getElementById('smallSquare31').onmouseover = function(){displaySquareQuestion(31)};
  document.getElementById('smallSquare32').onmouseover = function(){displaySquareQuestion(32)};
  document.getElementById('smallSquare33').onmouseover = function(){displaySquareQuestion(33)};
  document.getElementById('smallSquare34').onmouseover = function(){displaySquareQuestion(34)};
  document.getElementById('smallSquare35').onmouseover = function(){displaySquareQuestion(35)};
  document.getElementById('smallSquare36').onmouseover = function(){displaySquareQuestion(36)};
  document.getElementById('smallSquare37').onmouseover = function(){displaySquareQuestion(37)};
  document.getElementById('smallSquare38').onmouseover = function(){displaySquareQuestion(38)};
  document.getElementById('smallSquare39').onmouseover = function(){displaySquareQuestion(39)};
  document.getElementById('smallSquare40').onmouseover = function(){displaySquareQuestion(40)};
  document.getElementById('smallSquare41').onmouseover = function(){displaySquareQuestion(41)};
  document.getElementById('smallSquare42').onmouseover = function(){displaySquareQuestion(42)};
  document.getElementById('smallSquare43').onmouseover = function(){displaySquareQuestion(43)};
  document.getElementById('smallSquare44').onmouseover = function(){displaySquareQuestion(44)};
  document.getElementById('smallSquare45').onmouseover = function(){displaySquareQuestion(45)};
  document.getElementById('smallSquare46').onmouseover = function(){displaySquareQuestion(46)};
  document.getElementById('smallSquare47').onmouseover = function(){displaySquareQuestion(47)};
  document.getElementById('smallSquare48').onmouseover = function(){displaySquareQuestion(48)};
  document.getElementById('smallSquare49').onmouseover = function(){displaySquareQuestion(49)};
  document.getElementById('smallSquare50').onmouseover = function(){displaySquareQuestion(50)};
  document.getElementById('smallSquare51').onmouseover = function(){displaySquareQuestion(51)};
  document.getElementById('smallSquare52').onmouseover = function(){displaySquareQuestion(52)};
  document.getElementById('smallSquare53').onmouseover = function(){displaySquareQuestion(53)};
  document.getElementById('smallSquare54').onmouseover = function(){displaySquareQuestion(54)};
  document.getElementById('smallSquare55').onmouseover = function(){displaySquareQuestion(55)};
  document.getElementById('smallSquare56').onmouseover = function(){displaySquareQuestion(56)};
  document.getElementById('smallSquare57').onmouseover = function(){displaySquareQuestion(57)};
  document.getElementById('smallSquare58').onmouseover = function(){displaySquareQuestion(58)};
  document.getElementById('smallSquare59').onmouseover = function(){displaySquareQuestion(59)};



}



//------------------------ZMIANY-----------------------------
// losowe wybieranie,  (przebudowac loadQuestion z argumentem nr pytania)
//
