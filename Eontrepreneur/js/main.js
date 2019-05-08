//Getting Elements;

var modal= document.getElementById('signupmodal');
var modal2=document.getElementById('loginmodal');
var signupbtn= document.getElementById('signupbtn');
var loginbtn= document.getElementById('loginbtn');
var closebtn= document.getElementById('closebtn');
var closebtn2=document.getElementById('closebtn2');

signupbtn.addEventListener('click',openmodal);
loginbtn.addEventListener('click',openmodal2);
closebtn.addEventListener('click',closemodals);
closebtn2.addEventListener('click',closemodal2);
window.addEventListener('click', clickoutside);


//functions
function openmodal(){
    modal.style.display = 'block';
}

function openmodal2(){
    modal2.style.display = 'block';
}

function closemodals(){
    modal.style.display= 'none';
}

function closemodal2(){
    modal2.style.display= 'none';
}

function clickoutside(e){
    if(e.target == modal){
        modal.style.display='none';
    }
}