import Animal from "./superClassAnimal.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./classAnimales.js";
import Animales from "./dataAnimales.js";

let imgAnimal;
let sndAnimal;
let playSonido;
let idVariable = 0; //VARIABLE DINAMICA PARA IDENTIFICAR CADA ACCESO A MODAL
let arregloAnimal = [];
// ACTUALIZAR IMAGEN PREVIEW DE ANIMALES
document.getElementById("animal").addEventListener("change", async (event) => {
  const { animales } = await Animales.leer();
  //   console.log(animales);
  const seleccion = event.target.value;
  const preview = document.getElementById("preview");
  const tipoAnimal = animales.find((animal) => animal.name === seleccion);
  preview.style.backgroundImage = `url(../assets/imgs/${tipoAnimal.imagen})`;
  imgAnimal = `../assets/imgs/${tipoAnimal.imagen}`;
  sndAnimal = tipoAnimal.sonido;
});
// SECCION DE MOVIMIENTO DATOS DOM
document
  .getElementById("btnRegistrar")
  .addEventListener("click", async (event) => {
    event.preventDefault();
    let tipoAnimal = document.getElementById("animal").value;
    let edadAnimal = document.getElementById("edad").value;
    let comentarioAnimal = document.getElementById("comentarios").value;
    let preview = document.getElementById("preview");
    // VALIDACION DE CAMPOS LLENADOS
    if (tipoAnimal && edadAnimal && comentarioAnimal) {
      let opcion =
        tipoAnimal == "Leon"
          ? new Leon(
              tipoAnimal,
              edadAnimal,
              imgAnimal,
              comentarioAnimal,
              sndAnimal
            )
          : tipoAnimal == "Lobo"
          ? new Lobo(
              tipoAnimal,
              edadAnimal,
              imgAnimal,
              comentarioAnimal,
              sndAnimal
            )
          : tipoAnimal == "Oso"
          ? new Oso(
              tipoAnimal,
              edadAnimal,
              imgAnimal,
              comentarioAnimal,
              sndAnimal
            )
          : tipoAnimal == "Serpiente"
          ? new Serpiente(
              tipoAnimal,
              edadAnimal,
              imgAnimal,
              comentarioAnimal,
              sndAnimal
            )
          : tipoAnimal == "Aguila"
          ? new Aguila(
              tipoAnimal,
              edadAnimal,
              imgAnimal,
              comentarioAnimal,
              sndAnimal
            )
          : undefined;
      //   console.log(opcion);
    } else {
      alert("Debe completar todos los Campos");
    }

    const { animales } = await Animales.leer();
    const objetoAnimal = animales.find((animal) => animal.name === tipoAnimal);
    imgAnimal = `../assets/imgs/${objetoAnimal.imagen}`;
    sndAnimal = `../assets/sounds/${objetoAnimal.sonido}`;
    arregloAnimal.push(objetoAnimal);
    console.log(arregloAnimal);
    playSonido = objetoAnimal.name.toLowerCase();
    console.log(playSonido);
    console.log(idVariable);
    // INYECTAR CODIGO HTML SECCION ANIMALES EN INVESTIGACION
    document.getElementById("Animales").innerHTML += `<container class="mx-1">
    <div>
         <button id = "id_${idVariable}" type="button" class="btn btn-outline-secondary btn-lg" data-toggle="modal" data-target="#abrirModal"><img style="max-width:30%;" src="${imgAnimal}"  /></button>
    </div>
  <container class="container-fluid">
    <div>
         <button class="btn btn-danger reproducir" onclick="getElementById('${playSonido}').play()"> <img src="/assets/imgs/audio.svg" alt="x" width="120" height="25"></button>
         <audio id = "${playSonido}" src=${sndAnimal}></audio>
    </div>
  </container>
</container>`;
    
    // VARIABLE DINAMICA PARA IDENTIFICAR CADA ANIMAL REGISTRADO Y POSTERIOR INGRESO A MODAL
    idVariable = idVariable + 1;
    reset();
  });
// FUNCION RESETEO FORMULARIO
let reset = () => {
  document.getElementById("animal").selectedIndex = 0;
  document.getElementById("edad").selectedIndex = 0;
  document.getElementById("comentarios").value = "";
  preview.style.backgroundImage = "";


  // I N G R E S O  A   M O D A L E S   S I N G U L A R I Z A D A S 
  // var element = document.getElementById(`id_${idVariable}`);
  // element.addEventListener("click", async () => {
  //   const { animales } = await Animales.leer();
  //   const objetoAnimal = animales.find((animal) => animal.name === tipoAnimal);
  //   const preview = document.getElementById("imgModal");
  //   preview.style.backgroundImage = `url(../assets/imgs/${tipoAnimal.imagen})`;
  //   console.log(element);
  //   idVariable = idVariable + 1;
  // });
};
