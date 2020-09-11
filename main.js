
function x(){
    document.getElementById('popup').style.display="block";
    document.getElementById('box').style.display="block";
    }
var closebtn=document.getElementById('close');
closebtn.addEventListener('click', function(){
    document.getElementById('popup').style.display="none";
    document.getElementById('box').style.display="none";
})