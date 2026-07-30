const deliveryFee = 4.99;
const dialogRef = document.getElementById("delivery_dialog");
const priceCalculationRef = document.getElementById("calculation");
const buyNowRef = document.getElementById("buy_now");

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
        priceCalculationRef.innerHTML = "";
        buyNowRef.innerHTML = "";
        basketRef.innerHTML += emptyBasketTemplate();
    } else {
        basketRef.innerHTML = "";
        for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
            basketRef.innerHTML += basketTemplate(basketIndex);
            renderAmount(basketIndex);
            renderDishPrice(basketIndex);
            renderPriceCalculation();
            renderBuyNowButton();
        }
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
    let subtotalPrice = 0;
    for (let priceIndex = 0; priceIndex < basket.length; priceIndex++) {
        subtotalPrice += calculateDishPrice(priceIndex);
    }
    const totalPrice = subtotalPrice + deliveryFee;
    priceCalculationRef.innerHTML = calculationTemplate(subtotalPrice.toFixed(2).replace(".", ",") + "€", totalPrice.toFixed(2).replace(".", ",") + "€");
}

function renderBuyNowButton() {
    buyNowRef.innerHTML = buyNowTemplate();
}

function addToBasket(dish) {
    const alreadyOrdered = basket.findIndex(element => element.name == dish.name);
    if (alreadyOrdered < 0) {
        dish.amount = 1;
        basket.push(dish);
        renderBasket();
        updateDishButton(dish);
    } else {
        basket[alreadyOrdered].amount += 1;
        renderAmount(alreadyOrdered);
        renderDishPrice(alreadyOrdered);
        renderPriceCalculation();
        updateDishButton(dish);
    }
}

function updateDishButton(dish) {
    const buttonRef = document.getElementById(dish.name);
    const basketIndex = basket.findIndex(element => element.name == dish.name);
    if (basketIndex < 0) {
        buttonRef.innerText = "Add to basket";
        buttonRef.classList.remove("added_dish_button");
        buttonRef.classList.add("add_to_basket_button");
        shoppingCartCounter();
    } else {
        buttonRef.innerText = `Added ${basket[basketIndex].amount}`;
        buttonRef.classList.remove("add_to_basket");
        buttonRef.classList.add("added_dish_button");
        shoppingCartCounter();
    }
}

function increaseAmount(basketIndex) {
    basket[basketIndex].amount += 1;
    renderAmount(basketIndex);
    renderDishPrice(basketIndex);
    renderPriceCalculation();
    updateDishButton(basket[basketIndex]);
}

function reduceAmount(basketIndex) {
    basket[basketIndex].amount -= 1;
    if (basket[basketIndex].amount == 0) {
        deleteDish(basketIndex);
    } else {
        renderAmount(basketIndex);
        renderDishPrice(basketIndex);
        renderPriceCalculation();
        updateDishButton(basket[basketIndex]);
    }
}

function deleteDish(basketIndex) {
    const dish = basket[basketIndex];
    basket.splice(basketIndex, 1)
    renderBasket();
    updateDishButton(dish)
}

function deliveryDialog() {
    dialogRef.showModal();
    dialogRef.innerHTML = dialogTemplate();
    setTimeout(() => {
        closeDialog();
    }, 2500);
    basket.splice(0);
    renderBasket();
}

function closeDialog() {
    dialogRef.close();
}

function openBasket() {
    const basketWrapperRef = document.getElementById("basket_wrapper");
    const bodyRef = document.getElementById("body")
    basketWrapperRef.classList.toggle("basket_wrapper_open");
    bodyRef.classList.add("body_not_scrollable")
}

function closeBasket() {
    const basketWrapperRef = document.getElementById("basket_wrapper");
    const bodyRef = document.getElementById("body")
    basketWrapperRef.classList.remove("basket_wrapper_open");
    bodyRef.classList.remove("body_not_scrollable")
}

function shoppingCartCounter() {
    const counterRef = document.getElementById("counter_shopping_cart");
    const amountShoppingCartRef = document.getElementById("amount_shopping_cart");
    let counter = 0;
    for (let counterIndex = 0; counterIndex < basket.length; counterIndex++) {
        counter += basket[counterIndex].amount;
    }
    counterRef.innerText = counter;
    if (counter > 0) {
        amountShoppingCartRef.classList.add("amount_shopping_cart")
        amountShoppingCartRef.classList.remove("amount_shopping_cart_hidden")
    } else {
        amountShoppingCartRef.classList.add("amount_shopping_cart_hidden")
        amountShoppingCartRef.classList.remove("amount_shopping_cart")
    }
}

