//getting DOM Elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const personName = document.getElementById('personName');
const goal = document.getElementById("goal");

//Function to show live time
function showTime(){
    let today = new Date();
    let hour  = today.getHours();
    let min   = today.getMinutes();

    //AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 hour calculation
    hour = hour %12 || 12;

    //Time Output
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)} ${amPm}`;

    setTimeout(showTime, 1000);
}

//funtion to add zeros
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//function to set background
function changeGreet(){
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        //morning
        greeting.textContent = 'Good Morning,';
    }
    else if(hour<18){
        //afternoon
        greeting.textContent = 'Good Afternoon,';
    }
    else{
        //evening
        greeting.textContent = 'Good Evening,';
    }
}

//get name function
function getName(){
    if(localStorage.getItem('personName') === null){
        personName.textContent = '[Enter Name]';
    }
    else{
        personName.textContent = localStorage.getItem('personName');
    }
}

//set name function
function setName(e){
    if(e.type === 'keypress'){
        //check if enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('personName', e.target.innerText);
            personName.blur();
        }
    }
    else{
        localStorage.setItem('personName', e.target.innerText);
    }
}

//set goals function
function setGoal(e){
    if(e.type === 'keypress'){
        //check if enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('goal', e.target.innerText);
        }
    }
    else{
        localStorage.setItem('goal', e.target.innerText);
    }
}

//adding event listeners
personName.addEventListener('keypress', setName);
personName.addEventListener('blur   ', setName);
goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur   ', setGoal);

//Run
showTime();
changeGreet();
getName();