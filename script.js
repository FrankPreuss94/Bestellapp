function renderBurgers() {
    const burgersRef = document.getElementById("burger_dishes")
    for (let burgersIndex = 0; burgersIndex < burgers.length; burgersIndex++) {
        burgersRef.innerHTML += burgersTemplate(burgersIndex);
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

function renderBasket() {
    const basketRef = document.getElementById("orders")
    if (basket == "") {
        basketRef.innerHTML += emptyBasketTemplate();
    } else {
        basketRef.innerHTML = "";
        for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
            basketRef.innerHTML += basketTemplate(basketIndex);
            renderAmount(basketIndex);
            renderDishPrice(basketIndex)
        }
    }
}

function renderAmount(basketIndex) {
    const amountRef = document.getElementById(`amount_counter${basketIndex}`)
    amountRef.innerHTML = basket[basketIndex].amount;
}

function renderDishPrice(basketIndex) {
    const dishPriceRef = document.getElementById(`price${basketIndex}`)
    const calculatedPrice = basket[basketIndex].amount * basket[basketIndex].price;
    dishPriceRef.innerHTML = calculatedPrice.toFixed(2).replace(".", ",") + "€";
}

function addToBasket(dish) {
    const alreadyOrdered = basket.findIndex(element => element.name == dish.name);
    if (alreadyOrdered < 0) {
        dish.amount = 1;
        basket.push(dish);
        renderBasket();
    } else {
        basket[alreadyOrdered].amount += 1;
        renderAmount(alreadyOrdered);
        renderDishPrice(alreadyOrdered)
    }
}