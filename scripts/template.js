function burgersTemplate(burgersIndex) {
    return /*html*/`
        <div class="dish_card">
            <img src="./assets/img/${burgers[burgersIndex].img_link}" alt="${burgers[burgersIndex].img_alt}">
            <div class="dish_card_infos">
                <div class="name_discription">
                    <h3>${burgers[burgersIndex].name}</h4>
                    <p>${burgers[burgersIndex].discription}</p>
                </div>
                <div class="price_add">
                    <h4>${burgers[burgersIndex].price.toFixed(2).replace(".", ",")} €</h4>
                    <button onclick="addToBasket(burgers[${burgersIndex}])">Add to basket</button>
                </div>
            </div>
        </div>
    `
}

function pizzasTemplate(pizzasIndex) {
    return /*html*/`
        <div class="dish_card">
            <img src="./assets/img/${pizzas[pizzasIndex].img_link}" alt="${pizzas[pizzasIndex].name}">
            <div class="dish_card_infos">
                <div class="name_discription">
                    <h3>${pizzas[pizzasIndex].name}</h4>
                    <p>${pizzas[pizzasIndex].discription}</p>
                </div>
                <div class="price_add">
                    <h4>${pizzas[pizzasIndex].price.toFixed(2).replace(".", ",")} €</h4>
                    <button onclick="addToBasket(pizzas[${pizzasIndex}])">Add to basket</button>
                </div>
            </div>
    `
}

function saladsTemplate(saladsIndex) {
    return /*html*/`
        <div class="dish_card">
            <img src="./assets/img/${salads[saladsIndex].img_link}" alt="${salads[saladsIndex].name}">
            <div class="dish_card_infos">
                <div class="name_discription">
                    <h3>${salads[saladsIndex].name}</h4>
                    <p>${salads[saladsIndex].discription}</p>
                </div>
                <div class="price_add">
                    <h4>${salads[saladsIndex].price.toFixed(2).replace(".", ",")} €</h4>
                    <button onclick="addToBasket(salads[${saladsIndex}])">Add to basket</button>
                </div>
            </div>
    `
}

function emptyBasketTemplate() {
    return /*html*/`
        <div class="empty_basket">
            <p>Nothing here yet.<br>Go ahead an choose something delicious!</p>
            <img src="./assets/icons/shopping_cart.png" alt="shopping cart">
        </div>
    `
}

function basketTemplate(basketIndex) {
    return /*html*/`
        <div class="ordered_dish" id="ordered_dish${basketIndex}">
            <div class="name_and_trash">
                <h4>${basket[basketIndex].name}</h4>
                <button onclick="deleteDish(${basketIndex})"><img src="./assets/icons/delete.png" alt=""></button>
            </div>    
            <div class="amount_and_price">
                <div class="amount">
                    <button onclick="reduceAmount(${basketIndex})" id="reduce_button${basketIndex}">-</button>
                    <p id="amount_counter${basketIndex}"></p>
                    <button onclick="increaseAmount(${basketIndex})">+</button>
                </div>
                <div class="price">
                    <h4 id="price${basketIndex}">12,90€</h4>
                </div>
            </div>
        </div>
    `
}

function calculationTemplate(subtotalPrice, totalPrice) {
    return /*html*/`
        <div>
            <p>Subtotal</p>
            <p id="subtotal_price">${subtotalPrice}</p>
        </div>
        <div>
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2).replace(".", ",") + "€"}</p>
        </div>
        <div class="line"></div>
        <div class="total_price">
            <p>Total</p>
            <p id="total_price">${totalPrice}</p>
        </div>
    `
}

function dialogTemplate() {
    return /*html*/`
    <div class="dialog_wrapper">
        <div><button><img src="./assets/icons/close.png" alt="close"></button></div>
        <img src="./assets/icons/delivery.png" alt="delivery van">
        <h2>Order confirmed!</h2>
        <h3>Your food is on the way!</h3>
    </div>
`
}