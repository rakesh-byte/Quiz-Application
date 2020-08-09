window.onload  = function (){
    show(0);
}

var questions = [
    {
        id:1,
        question: "What is full form of RAM?",
        answer: "Random Access Memory",
        options:[
            "Randomly Access Memory",
            "Random Access Memory",
            "Run Accept Memory",
            "N.O.T"
        ]
    },
    {
        id:2,
        question: "What is full form of CPU?",
        answer: "Centeral Processing Unit",
        options:[
            "Centeral Processing Unit",
            "Centeral Program Unit",
            "Centeral Proloading Unit",
            "N.O.T"
        ]

    },
    {
        id:3,
        question: "What is full form of E-mail?",
        answer: "Electronic mail",
        options:[
            "Electronic mail",
            "Electric mail",
            "Engine mail",
            "N.O.T"
        ]
    }
    
];

function submitform(e){
    e.preventDefault();
    let name = document.forms["welcome_form"]["user_name"].value;
    sessionStorage.setItem('name',name);
    location.href = "question.html";

}

let questioCount = 0;
let quiz_point = 0;
function next(){
    let user_answer = document.querySelector("li.option.active").innerHTML;
   
    if(user_answer == questions[questioCount].answer){
        quiz_point += 10;
        sessionStorage.setItem("points",quiz_point); 
    }

    if(questioCount == questions.length-1)
    {
        location.href = "final.html";
        return;
    }

    
    questioCount++;
    show(questioCount);
}

function show(count){
    let question = document.getElementById("questions");
    
    question.innerHTML = `<h2> ${questions[count].question} </h2>
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
</ul>`;
toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll('li.option');
    for(let i=0; i<option.length; i++)
    {
        option[i].onclick= function(){
            for(let j=0;j<option.length;j++)
            {
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}



