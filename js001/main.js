var sharebut = document.getElementById('sharebutton')
var sharepop = document.getElementById('popup')

function popup(){
    if (window.innerWidth <= 600){
        sharepop.classList.toggle('show')
    } else{
        sharepop.classList.toggle('show')
        sharebut.classList.toggle('active')
        
    } 
}

sharebut.addEventListener('click', popup)