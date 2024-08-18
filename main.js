// importar los datos del menu
import { platos } from "./data.js";

const dishesContainer = document.querySelector(".food-container");

const menu = document.querySelector(".menu");

window.addEventListener("DOMContentLoaded", () => {
    showAllDishes(platos);
});

menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__anchor")) {
        showCustomDishes(e.target.dataset.category);
    }
});

// mostrar todos los platos
function showAllDishes(arrayDishes) {
    const dishes = arrayDishes.map((data) => {
        return `
        <article class="dish">
            <div class="dish-img">
                <img src="${data.imagen}" alt="${data.nombre}" class="dish-img__pic" />
            </div>
            <div class="dish-info">
                <h4 class="dish-info__title">
                    ${data.nombre}
                    <span class="dish-price">$ ${data.precio}</span>
                </h4>

                <p class="dish-info__description">
                    ${data.descripcion}
                </p>
            </div>
        </article>
        `;
    });

    dishesContainer.innerHTML = dishes.join(" ");
}

// filtrar los platos a mostrar
function showCustomDishes(keyword) {
    if (keyword !== null && keyword !== "all") {
        const dishesFilter = platos.filter((dish) => {
            if (dish.categoria == keyword) {
                return dish;
            }
        });

        showAllDishes(dishesFilter);
    } else {
        showAllDishes(platos);
    }
}
