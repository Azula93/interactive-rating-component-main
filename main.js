let cardContainer = document.querySelector('.cardContainer');
let numberContainer = document.querySelector('.cardContainer__numbers');
let numSelect = document.querySelector('.numSelect');
let submit = document.querySelector('.cardContainer__button');
let thanksCard = document.querySelector('.thanks');

// nuevo boton
let backBtn = document.querySelector('.backBtn');


// se agrega una escucha y en la funcion flecha se inidica la eleccion del usurio, este valor se obtiene con esta linea 'event.target.innerHTML' luego se crea una variable ☝ en donde se selecciona el espacio en donde se debe modificar el numero 
function userSelect() { numberContainer.addEventListener('click',(event)=>{
   let chooseUser = event.target.innerText;
    numSelect.innerText = chooseUser;

   //  el condicional funciona cuando el usuario ha hecho una eleccion entre 1 y 5 si escoge uno de estos numeros se le permite avanzar de lo contario no puede enviar la puntuacion
   
    if (chooseUser >0 || chooseUser<=5){
    submit.addEventListener('click',()=>{
      cardContainer.style.display = 'none';
      thanksCard.style.display = 'block';
      
    })
   }
})
};
userSelect();

// se agrega la escucha para que al presionar back se regrese a la pag principal
backBtn.addEventListener('click', ()=>{
      cardContainer.style.display = 'block';
      thanksCard.style.display = 'none';
});

