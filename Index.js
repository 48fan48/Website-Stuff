let lapDiv = document.getElementById('lap')
let driverList = document.getElementById('top10')
let ref = document.getElementById('refresh')




updateData()

ref.onclick = updateData



function updateData(){

    lapDiv.innerHTML = ""
    driverList.innerHTML = ""

fetch('https://cf.nascar.com/live/feeds/live-feed.json')
.then(res => res.json())
.then(race_data => {
    lapDiv.innerHTML += `<p> Current Lap:      ${race_data.lap_number} </p> `

    driverList.innerHTML += ` <div class = "grid-item" > Running Order: </div> `

    var i = 0
    while(i < 10){
    driverList.innerHTML += ` <div class = "grid-item" title = "Fastest Lap ${race_data.vehicles[i].best_lap_speed}
    ">  ${race_data.vehicles[i].driver.full_name}  ${race_data.vehicles[i].delta}  </div>`
    i++
    }

    

})



}


