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
                    <button onclick="addToBasket(burgers[${burgersIndex}])" id="add_burger_to_basket${burgersIndex}">Add to basket</button>
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
                    <button id="add_to_basket${pizzasIndex}">Add to basket</button>
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
                    <button>Add to basket</button>
                </div>
            </div>
    `
}