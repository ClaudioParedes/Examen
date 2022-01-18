class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;
  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  get Nombre() {
    return this.#nombre;
  }

  get Edad() {
    return this.#edad;
  }

  get Img() {
    return this.#img;
  }

  set Comentarios(comentario) {
    this.#comentarios = comentario;
  }
}

export default Animal;


// class Animal {
//   constructor(nombre, edad, img, comentarios, sonido) {
//     let Nombre = nombre;
//     this.getNombre = () => Nombre;

//     let Edad = edad;
//     this.getEdad = () => Edad;

//     let Img = img;
//     this.getImg = () => Img;

//     let Comentarios = comentarios;
//     this.getComentarios = () => Comentarios;

//     let Sonido = sonido;
//     this.getSonido = () => Sonido;
//   }

//   get Nombre() {
//     return this.getNombre();
//   }

//   get Edad() {
//     return this.getEdad();
//   }
//   get Img() {
//     return this.getImg();
//   }

//   get Comentarios() {
//     return this.getComentarios();
//   }

//   get Sonido() {
//     return this.getSonido();
//   }
// }

// export default Animal;

