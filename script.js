const deliveryFee = 4.99;

function renderBurgers() {
    const burgersRef = document.getElementById("burger_dishes");
    for (let burgersIndex = 0; burgersIndex < burgers.length; burgersIndex++) {
        burgersRef.innerHTML += burgersTemplate(burgersIndex);
    }
}

function renderPizzas() {
    const pizzasRef = document.getElementById("pizzas_dishes");
    for (let pizzasIndex = 0; pizzasIndex < pizzas.length; pizzasIndex++) {
        pizzasRef.innerHTML += pizzasTemplate(pizzasIndex);
    }
}

function renderSalads() {
    const saladsRef = document.getElementById("salads_dishes");
    for (let saladsIndex = 0; saladsIndex < salads.length; saladsIndex++) {
        saladsRef.innerHTML += saladsTemplate(saladsIndex);
    }
}

function renderBasket() {
    const basketRef = document.getElementById("orders");
    if (basket == "") {
        basketRef.innerHTML = "";
        basketRef.innerHTML += emptyBasketTemplate();
    } else {
        basketRef.innerHTML = "";
        for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
            basketRef.innerHTML += basketTemplate(basketIndex);
            renderAmount(basketIndex);
            renderDishPrice(basketIndex);
        }
        renderPriceCalculation();
    }
}

function renderAmount(basketIndex) {
    const amountRef = document.getElementById(`amount_counter${basketIndex}`);
    amountRef.innerHTML = basket[basketIndex].amount;
}

function calculateDishPrice(basketIndex) {
    return basket[basketIndex].amount * basket[basketIndex].price;
}

function renderDishPrice(basketIndex) {
    const dishPriceRef = document.getElementById(`price${basketIndex}`);
    const calculatedPrice = calculateDishPrice(basketIndex);
    dishPriceRef.innerHTML = calculatedPrice.toFixed(2).replace(".", ",") + "€";
}

function renderPriceCalculation() {
    const priceCalculationRef = document.getElementById("calculation");
    let subtotalPrice = 0;
    for (let priceIndex = 0; priceIndex < basket.length; priceIndex++) {
        subtotalPrice += calculateDishPrice(priceIndex);
    }
    const totalPrice = subtotalPrice + deliveryFee;
    priceCalculationRef.innerHTML = calculationTemplate(subtotalPrice.toFixed(2).replace(".", ",") + "€", totalPrice.toFixed(2).replace(".", ",") + "€");
    console.log(subtotalPrice);
    console.log(totalPrice);

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
        renderDishPrice(alreadyOrdered);
        renderPriceCalculation();
    }
}

function increaseAmount(basketIndex) {
    basket[basketIndex].amount += 1;
    renderAmount(basketIndex);
    renderDishPrice(basketIndex);
    renderPriceCalculation();
}

function reduceAmount(basketIndex) {
    basket[basketIndex].amount -= 1;
    if (basket[basketIndex].amount == 0) {
        deleteDish(basketIndex);
    } else {
        renderAmount(basketIndex);
        renderDishPrice(basketIndex);
        renderPriceCalculation();
    }
}

function deleteDish(basketIndex) {
    basket.splice([basketIndex], 1)
    renderBasket();
}
