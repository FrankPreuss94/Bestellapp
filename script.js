function renderBurgers() {
    const burgersRef = document.getElementById("burger_dishes")
    for (let burgerIndex = 0; burgerIndex < burgers.length; burgerIndex++) {
        burgersRef.innerHTML += burgersTemplate(burgerIndex);
    }
}

function renderPizzas() {
    const pizzasRef = document.getElementById("pizzas_dishes")
    for (let pizzasIndex = 0; pizzasIndex < pizzas.length; pizzasIndex++) {
        pizzasRef.innerHTML += pizzasTemplate(pizzasIndex);
    }
}

function renderSalads() {
    const saladsRef = document.getElementById("salads_dishes")
    for (let saladsIndex = 0; saladsIndex < salads.length; saladsIndex++) {
        saladsRef.innerHTML += saladsTemplate(saladsIndex);
    }
}