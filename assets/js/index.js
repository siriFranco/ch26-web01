console.log("Sesion web1");

function changeGreeting(){
    // obtener nombre cliente
    const clientName = getNameOfClient ();
    // obtener referencia label h1
    const greetingReference = getReferenceOfIdGreeting();
    greetingReference.innerHTML = "Hola " + clientName;
    // cambiar saludo
}

function getNameOfClient(){
    const clientName = prompt("Escribe tu nombre");
    return clientName;
}

function getReferenceOfIdGreeting(){
    return document.getElementById("Greeting");
}
