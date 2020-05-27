const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)
var request = new XMLHttpRequest()
request.onload = function() {
    try {
        const resObj = JSON.parse(this.responseText)
        console.log(resObj.data)

        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        for (var i = 0; i <= 34; i++) {
            var temp = ""
            temp = "total confirmed  :"
            const h1 = document.createElement('h1')
            const h2 = document.createElement('h2')
            const h21 = document.createElement('h2')
            const h3 = document.createElement('h3')
            const h31 = document.createElement('h3')
            h1.textContent = resObj.data.regional[i].loc
            h2.textContent = temp + " " + resObj.data.regional[i].totalConfirmed
            h21.textContent = "Deaths : " + resObj.data.regional[i].deaths
            h3.textContent = "Discharged patients : " + resObj.data.regional[i].discharged
            h31.textContent = "Active Cases :" + (resObj.data.regional[i].totalConfirmed-resObj.data.regional[i].discharged)
            const hr = document.createElement('hr')
            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(h2)
            card.appendChild(h21)
            card.appendChild(h3)
            card.appendChild(h31)
            card.appendChild(hr)
        }

    } catch (e) {
        console.warn('errorr was there')
    }

}
request.open('GET', 'https://api.rootnet.in/covid19-in/stats/latest', true)

request.send()