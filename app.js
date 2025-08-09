// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreDeAmigo = document.getElementById('amigo').value;
    console.log(typeof(nombreDeAmigo));
    //console.log(nombreDeAmigo);
   
    if (nombreDeAmigo == "" ){
        alert('porfavor rellenar');
    }else{
        amigos.push(nombreDeAmigo);
        console.log(amigos.length);
        console.log(amigos);
        document.getElementById('ruleta').removeAttribute('disabled');
    }
    let lista = document.querySelector('ul');
    lista.innerHTML = (`${amigos}`);
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    
}

console.log(amigos)

// function mostrarLista(amigos, listaAmigos){
//     let lista = document.getElementById('listaAmigos')
//     if (!lista) {
//       console.error(`No se encontró el elemento con ID: ${listaAmigos}`);
//       return;
//     amigos.forEach(item => {
//     const listItem = document.createElement("li");
//     listItem.textContent = item;
//     lista.appendChild(listItem);
//   });
// }
// }
// let lista = document.querySelector('ul')
// lista.innerHTML = (`luis , ${amigos}`)