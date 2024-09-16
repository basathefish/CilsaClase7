const featuresList = document.querySelector(".feats");
const specifList = document.querySelector(".specs");
const buttonInfoFeatures = document.querySelector(".btn-information-feat");
const buttonInfoSpecifications = document.querySelector(
  ".btn-information-spec"
);
const figureAspect = document.querySelector(".figure-aspect");

function toggleInfo(buttonToShow, buttonToHide, listToShow, listToHide) {
  listToHide.classList.add("hidden");
  listToShow.classList.remove("hidden");
  buttonToShow.classList.add("bg-light");
  buttonToHide.classList.remove("bg-light");
}

buttonInfoFeatures.addEventListener("click", () => {
  toggleInfo(
    buttonInfoFeatures,
    buttonInfoSpecifications,
    featuresList,
    specifList
  );
});

buttonInfoSpecifications.addEventListener("click", () => {
  toggleInfo(
    buttonInfoSpecifications,
    buttonInfoFeatures,
    specifList,
    featuresList
  );
});

const counter = document.querySelector(".counter");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");

let count = 1;

function counterProductMinus() {
  if (count > 1) {
    count--;
    counter.textContent = count;
  }
}

function counterProductPlus() {
  count++;
  counter.textContent = count;
}

buttonPlus.addEventListener("click", counterProductPlus);
buttonMinus.addEventListener("click", counterProductMinus);

const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll("#thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    mainImage.src = this.src;
  });
});

// Obtener elementos del DOM
const cartCountElement = document.getElementById('cartCount'); 
const addToCartButton = document.querySelector('.btn-dark'); 
let cartCount = 0; 

// Función para aumentar el contador del carrito según la cantidad seleccionada
function addToCart() {
  const selectedQuantity = parseInt(counter.textContent); 
  cartCount += selectedQuantity; 
  cartCountElement.textContent = cartCount;
}

// Escuchar el evento de click en el botón "Add to Cart"
addToCartButton.addEventListener('click', addToCart);
