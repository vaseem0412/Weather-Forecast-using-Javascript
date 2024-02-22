let btn = document.getElementById("btn")
let input =document.getElementById("input")
let city = document.getElementById("city")
let para = document.getElementById("para")
let h1 = document.getElementById("h1")
let max = document.getElementById("max")
let min = document.getElementById("min")
let pre = document.getElementById("pre")
let hum = document.getElementById("hum")



let url = "https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=1cb6532aea3c298a830a71380eace21e"

let search = async () =>{

    if (input.value.length == 0) {
        alert("please enter city name for search")
    }else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let responce = await fetch(url)
        let data = await responce.json()
        city.textContent = data.name
        h1.textContent = data.main.temp
        para.textContent = data.sys.country
        if (data.main.temp > 30) {
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2023/05/24/22/38/sun-8015974_640.jpg')"
        }else if(data.main.temp < 30 && data.main.temp > 20){
            document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-7702.jpg')"
        }else if(data.main.temp > 10 && data.main.temp < 20){
            document.body.style.backgroundImage = "url('https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg?w=900)"
        }else{
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/01/14/08/34/landscape-4764424_1280.jpg')"
        }

        max.textContent=data.main.temp_max
        min.textContent=data.main.temp_min
        pre.textContent= data.main.pressure
        hum.textContent=data.main.humidity
    }
}

