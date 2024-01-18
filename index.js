fetch("YOUR API").then(res => res.json()).then(json => {   // API https://www.coingecko.com/pt/api
    const container = document.querySelector(".container");
    const coins = Object.getOwnPropertyNames(json);

    for(let coin of coins){
        const coinInfo = json[`${coin}`];
        const price = coinInfo.usd;
        const change = coinInfo.usd_24h_change.toFixed(5);

        container.innerHTML += `
        <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="images/${coin}.png">
                    </div>
                    <div class="coin-name">
                        <h3>${coin}</h3>
                        <span>/USD</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">$${price}</span>
                        <span class="change">${change}</span>
                    </div>
                </div>
        `;
    }
});