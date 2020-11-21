const subBtn = document.querySelector(".btn-submit")
const city= document.getElementById('city')
const temp = document.getElementById('temp')
const inpText = document.getElementById("weather-text")
subBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(inpText.value===""){
        alert("Please enter the city name")
        city.innerHTML =""
        temp.innerHTML = ""
    }
    else{
        fetch(`http://api.weatherapi.com/v1/current.json?key=49c2a525642243ea9be112829201311&q=${inpText.value}
        `).then((res)=>res.json())
        .then(data=>{
            console.log(data)
            let location = data.location.name
            let country = data.location.country 
            let temp_c= data.current.temp_c
            city.innerHTML = `${location},${country}`
            temp.innerHTML = `${temp_c}<sup>o</sup>c`
        })
    }

  
})