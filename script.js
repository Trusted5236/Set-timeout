// const text = document.getElementById("text")
// const cancel = document.getElementById("cancel")
const cont = document.getElementById("cont")
const form = document.getElementById("form")
const input = document.getElementById("city")
const text =  document.getElementById("text")
// // function sayMyName(){
// //     console.log("Agbata Trust")
// // }

// // sayMyName()

// // const ID = setTimeout(function(){
// //     console.log("hello")
// //     }, 5000)


// // function sayLove(who){
// // console.log(`I love ${who}`)
// // console.log(who)
// // }

// // const ID2 = setTimeout(function(){
// //     text.textContent = "Driver found"
// //     console.log("Get data from api")
// //     }, 6000)

// // cancel.addEventListener("click",function(){
// // clearTimeout(ID2)
// // text.textContent = "Driver search canceled"
// // })
// // sayLove("trust")

// // console.log(ID)
// // console.log(ID2)

// // const ID3 = setInterval(()=>{
// //     let text = document.createElement("h1")
// //     text.textContent = "Agbata"
// //     cont.append(text)
// // },2000)

// // console.log(ID3)

// // cancel.addEventListener("click", ()=>{
// //     clearInterval(ID3)
// //     text.textContent = "Interval  cleared"
// // })

// // const request = new XMLHttpRequest()
// // request.open("GET", "./data.json")
// // request.onreadystatechange = function(){
// //     if(this.readyState === 4 && this.status === 200){
// //      let data = JSON.parse(this.responseText)
// //      console.log(data) 


// //      data.forEach((item)=>{
// //         console.log(item)
// //         let name = item.name
// //         let country = item.country


// //         let nameEle = document.createElement("h3")
// //         let countEle = document.createElement("p")

// //         nameEle.textContent = name
// //         countEle.textContent = country
// //         cont.append(nameEle, countEle)
// //      })
// //     }
// // }

// // request.send()
// // console.log(request)

// const newRequest =  new XMLHttpRequest()
// newRequest.open("GET", "./data.json")
// console.log(newRequest)

// newRequest.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         let info = JSON.parse(this.responseText)
//         console.log(info)


//         info.forEach((item)=>{
//             let name = document.createElement("h3")
//             let country = document.createElement("p")

//             name.textContent = item.name
//             country.textContent = item.country

//             cont.append(name, country)
//         })
//     }
// }

// newRequest.send()


// const obj = {
//     obj1:{
//             name : "TRUST AGBATA",
//             country: "Nigeria",
//     },

//     obj2:{
//         name : "Favour Chikamnele",
//         country: "Canada"
//     },

//     obj3:{
//         name : "Pricilia Ojo",
//         country: "Tanzania"
//     },
// }



// for(value in obj){
// console.log(value)
// }

// // const info = fetch("./data.json")
// // .then(kil=>kil.json())
// // .then(data => console.log(data))
// // console.log(info)


// form.addEventListener(`submit`, getWether)

// function getWether(event){
//     event.preventDefault()
//     city = input.value
//     console.log(city)
//     let weatherReq = new XMLHttpRequest()
// let APIKey = "2f20b0de864d32958ecccaac4a7c9993"
// weatherReq.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
// weatherReq.send()

// weatherReq.onreadystatechange = function(event){
//     event.preventDefault()
//     if(this.readyState === 4 && this.status === 200){
//         let response = JSON.parse(this.responseText)
//         console.log(response)
//         let temp =(response.main.temp - 273.15).toFixed(0)
//         console.log(temp + "°C")
//         printTOUI(response)
//     }  
// }
// console.log(weatherReq)
// }



// // function printTOUI(response){
// //     console.log(response)
// //     let temp =(response.main.temp - 273.15).toFixed(0)
// //     let temp1 = temp + "°C"
    
    
// //     let cityText = document.createElement("h3")
// //     let tempText = document.createElement("p")
    
// //     cityText.textContent = city
// //     tempText.textContent = temp1
// //     console.log(temp)
// //     cont.append(cityText, tempText)
// //     console.log(city)
// //     }
// const array = [
//     {
//         name: "cletus adams",
//         country:"nigeria"
//     },

//     {
//         name: "Oshimole adams",
//         country:"edo"
//     }
// ]

// console.log(Date()) 

// const promise = new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     resolve(array)
//     reject(array)
// },5000)
// }).then((data)=>{
// return data[0]
// }).then((newData)=>{
// console.log(newData.name)
// return newData.name
// })

let city =  "Lagos"
let API = "2f20b0de864d32958ecccaac4a7c9993"
function collectAPI(){
    let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
const ID = setTimeout(()=>{ 
    fetch(endPoint).then((data)=>{
        console.log(data)
        return data.json()
    }).then((dataInfo)=>{
        console.log(dataInfo)
        printtoui(dataInfo)
    }).catch(()=>{
        console.log("hello")
    })

}, 3000)

    
}

collectAPI()

function printtoui(ID){
    text.textContent = ID.wind.deg
}