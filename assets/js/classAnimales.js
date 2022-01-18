import Animal from "./superClassAnimal.js";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  rugir() {
    console.log("Roaaaaarr");
  }
}
class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
      }
      aullar() {
        console.log("Aaauu");
      }
}
class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
      }
      grunir() {
        console.log("grrrr");
      }
}
class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
      }
      sisear() {
        console.log("zZZzsss");
      }
}
class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
      }
      chillar() {
        console.log("Aaahh");
      }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
