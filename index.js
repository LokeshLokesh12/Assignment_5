const express = require('express');
let restaurant = require('./restaurantdata.json')
let app = express();
let port = 8900;


app.get('/',(req,res)=>{


    let city =[] 
    // let city =[]            
    for(i=0;i<restaurant.length;i++){
        if(city.indexOf(restaurant[i].city_name) === -1){
            city.push(restaurant[i].city_name)
        }
    }
    // filtercityname()
    res.send(city).json
})

app.get('/:city',(req,res) => {

    let info = req.params.city
    let city =  info.charAt(0).toUpperCase() + info.substring(1)

    res.send(
        restaurant.filter((data)=>{
         return  data.city_name == city
        })
    )
   
})

app.listen(port,()=>{
    console.log('servre is runnun in ' + port )
})