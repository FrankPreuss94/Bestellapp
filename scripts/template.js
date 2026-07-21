function burgersTemplate(burgerIndex) {
    return /*html*/`
        <div class="dish_card">
            <img src="./assets/img/${burgers[burgerIndex].img_link}" alt="${burgers[burgerIndex].img_alt}">
            <div class="dish_card_infos">
                <div class="name_discription">
                    <h3>${burgers[burgerIndex].name}</h4>
                    <p>${burgers[burgerIndex].discription}</p>
                </div>
                <div class="price_add">
                    <h4>${burgers[burgerIndex].price.toFixed(2).replace(".", ",")} €</h4>
                    <button>Add to basket</button>
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
                    <button>Add to basket</button>
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