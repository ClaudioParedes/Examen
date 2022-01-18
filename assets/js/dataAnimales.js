let Animales = (() => {
  const leer = async () => {
    const resp = await fetch("http://127.0.0.1:5500/assets/js/animales.json");
    const data = await resp.json();
    return data;
  };

  return { leer };
})();

export default Animales;
