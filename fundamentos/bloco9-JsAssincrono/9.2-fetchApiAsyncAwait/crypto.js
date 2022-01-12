const url = 'https://api.coincap.io/v2/assets'

const fetchApi = async function(){
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const coinDiv = document.getElementById('cryptoContainer')
    const marketData = await jsonResponse.data
    const firstTenCoins = await marketData.slice(0,10)
    await firstTenCoins.map((coin) =>{
        const span = document.createElement('span')
        span.innerText = `${coin.name} (${coin.symbol}): $${coin.priceUsd}`
        span.style.display = 'block'
        coinDiv.appendChild(span)
    })

}

window.onload = () => fetchApi();