// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []


function agregarAmigo()
{
    const nombre = document.getElementById("amigo").value;
    if(nombre === "")
    {
        alert("El campo no puede estar vacío por favor ingresa un nombre");
        return;
    }else{
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        actualizarLista();
    }
}

const actualizarLista=()=>{
    
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    
    for(const element of amigos)
    {
        let li = document.createElement("li");
        li.textContent = element;
        lista.appendChild(li);
    }

}

const sortearAmigo = () => {
    if(amigos.length === 0)
    {
        alert("No hay amigos para sortear");
        
    }else{
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[indiceAleatorio];
        alert(`El amigo seleccionado es: ${amigoSeleccionado}`);
         const lista = document.getElementById("listaAmigos");
         lista.innerHTML = "";
        amigos=[];
    }
}
    
