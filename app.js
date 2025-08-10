// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.querySelector('ul');

function agregarAmigo(){
    let nombreDeAmigo = document.getElementById('amigo').value;
    console.log(typeof(nombreDeAmigo));
    console.log(nombreDeAmigo);
   
    if (nombreDeAmigo == "" ){
        alert('porfavor rellenar');
    }else{
        amigos.push(nombreDeAmigo);
        console.log(amigos.length);
        console.log(amigos);
        document.getElementById('ruleta').removeAttribute('disabled');
    }
    
    let elementoLista = document.createElement('li');
    elementoLista.textContent = nombreDeAmigo; 
    lista.appendChild(elementoLista); 
    
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function condicionesIniciales(){
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
    amigos = [];
    //amigos.splice(0, amigos.length);
    document.querySelector('#ruleta').setAttribute('disabled','true');
}


    function sortearAmigo(){
        //escoger nombre aletorio
        let tamanoDelArreglo = amigos.length;
        let indiceAleatorio = Math.floor(Math.random() * tamanoDelArreglo);
        let amigoAleatorio = amigos[indiceAleatorio];
        alert("El amigo secreto es: " + amigoAleatorio);
        console.log("El amigo secreto es: " + amigoAleatorio);
        //limpiar campo input
        limpiarCaja();
        //limpiar lista
        //limpiar vista de la lista
        //desabilitar sorteodeAmigo
        condicionesIniciales();
    }


