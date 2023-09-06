const form = document.getElementById('formulario-contacto');
const popup = document.getElementById('popup');
const closeBut = document.getElementById('close-button');

form.addEventListener('submit', function(e){
    e.preventDefault();
    popup.style.display = 'flex';
    })
closeBut.addEventListener('click', function(){
    popup.style.display = 'none';
});

