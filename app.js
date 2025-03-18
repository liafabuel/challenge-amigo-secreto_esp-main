// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaDeAmigos = [];
const inputNombre = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");


function agregarAmigo() {
    const nuevoAmigo = inputNombre.value; //tomo el nombre ingresado

    if(validarNombre(nuevoAmigo)){
        if(!listaDeAmigos.includes(nuevoAmigo)){ //Si el nombre no ha sido ingresado con anterioridad
            listaDeAmigos.push(nuevoAmigo); //Agregamos el nombre al Array
            ulListaAmigos.innerHTML += `<h1>${nuevoAmigo}</h1>`; //Agregamos el nombre a la lista que se muestra en la IU
        }
        else {
            alert("Este nombre ya ha sido ingresado antes");    
        }
    }
    else{
        alert("Por favor, ingrese un nombre válido");
    }
    inputNombre.value = ""; //limpiar el campo de texto
    console.log(listaDeAmigos);
  }
  
  //Valida que las entradas sean solo nombres y no de mas de 30 caracteres
  function validarNombre(nombre) {
    if (nombre === "") {
      return false;
    }
    if (!/^[A-Za-z\s]+$/.test(nombre)) {
      return false;
    }
    // Otras validaciones (longitud máxima)
    if (nombre.length > 30) {
      return false;
    }
    return true;
  }

  // Funcion que ejecuta toda la logica de seleccionar aleatoriamente un amigo de la lista
  function sortearAmigo() {
    //const listaDeAmigos = ["Ana", "Juan", "Sofía", "Pedro", "Luisa", "Carlos"]; // Lista de amigos
  
    if (listaDeAmigos.length === 0) {
      //return "La lista de amigos está vacía."; // Manejo de lista vacía
      alert("Por favor, ingrese al menos un nombre de amigo");
    }
    else{
        const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); // Genera un índice aleatorio
        const amigoElegido = listaDeAmigos[indiceAleatorio]; // Obtiene el amigo del índice aleatorio
        
        //console.log(amigoElegido);
        resultado.innerHTML = `<h1>El amigo secreto sorteado es: ${amigoElegido}</h1>`;
        
    }
  }
  