


let lapDiv = document.getElementById('laps')
let driverList = document.getElementById('top10')
let ref = document.getElementById('refresh')




setData()

ref.onclick = updateData



function setData(){


fetch('https://cf.nascar.com/live/feeds/live-feed.json')
//fetch('https://m.nascar.com/live/feeds/series_1/4871/stage1-feed.json')
.then(res => res.json())
.then(race_data => {

    
    
    lapDiv.textContent =  "Current Lap: " +  race_data.lap_number

    

    fadeIn(lapDiv)

    
    
    
    

   
    
    

    
    
    for(var i = 0; i <10; i++){

    let currDriver = document.getElementById('driver' + i)

    var name = race_data.vehicles[i].driver.full_name

    var delta = race_data.vehicles[i].delta

   currDriver.textContent = name + " " + delta

   fadeIn(currDriver)

    
   
    }

    

})





}



function updateData(){


    fetch('https://cf.nascar.com/live/feeds/live-feed.json')
    //fetch('https://m.nascar.com/live/feeds/series_1/4871/stage1-feed.json')
    .then(res => res.json())
    .then(race_data => {
    
        //lapDiv.innerHTML += `<p> Current Lap:      ${race_data.lap_number} </p> `
        
        lapDiv.textContent =  "Current Lap: " +  race_data.lap_number
    
        
    
        
    
        
        
        
        
    
       
        
        
    
        var i = 0
        while(i < 10){
        
    
        let currDriver = document.getElementById('driver' + i)
    
        var name = race_data.vehicles[i].driver.full_name
    
        var delta = race_data.vehicles[i].delta
    
       currDriver.textContent = name + " " + delta
    
    
        
        i++
        }
    
        
    
    })
    
    
    
    
    
    }


    function fadeIn(obj){


        obj.style.opacity = 0
        
        var opacity = 0
        
       
       var fadeInID = setInterval(fadeAnim,20,obj)
        
        
        
        function fadeAnim(obj){
    
            opacity += 0.01
            obj.style.opacity = opacity
            obj.style.background.opacity = opacity
    
            if(opacity > 1){
                clearInterval(fadeInID)
            }
    
        }
    }