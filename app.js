const importar = require('./collectibles.js');

const hotToys = figuras1('1');
const bandai = figuras2('2');
const starWars = figuras3('3');

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];
const collectibles = {
    figuras: unifiedCollectibles,
  };
  collectibles.listFigures = function () {
    this.figuras.forEach((figura) => {
      console.log(
        `Marca: ${figura.marca}, Nombre: ${figura.nombre}, Precio: ${figura.precio}, Stock: ${figura.stock}`
      );
    });
  };
  collectibles.figuresByBrand = function (marca) {
    return this.figuras.filter((figura) => figura.marca === marca);
  };
  console.log("Listado de todas las figuras:");
  collectibles.listFigures();
  
  console.log("Listado de figuras de la marca Hot Toys:");
  const hotToysFigures = collectibles.figuresByBrand("Hot Toys");
  console.log(hotToysFigures);
        