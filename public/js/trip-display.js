import APIHandler from "./APIHandler.js"

document.querySelectorAll('.trip-container .image-container').forEach(image => {
    image.onmouseover = displayPreview
});

document.querySelectorAll('.trip-container .image-container').forEach(image => {
    image.onmouseout = takeOffPreview
});
// console.log(document.querySelectorAll('.trip-container'))
function formatDate(x) {
    var date = new Date(x);
    return date;
};

function displayPreview (e) {
var url = e.target.id;
// console.log("url",url);

APIHandler
.get(`/preview-trip${url}`)
.then(apiRes => {
    var trip = apiRes.data;
    var title = trip.title
    var from = trip.cityOrigin.city + ", " + trip.cityOrigin.country;
    var to = trip.cityToVisit.city + ", " + trip.cityToVisit.country;
    var date = formatDate(trip.cityOrigin.date).toDateString() + " | " + formatDate(trip.cityToVisit.date).toDateString()
    var accommodations_type = trip.accommodations.accommodations_type;
    var transports_type = trip.cityOrigin.transport_type;
    var necessaryThings = trip.necessaryThings;
    var activities = trip.activities;
    var notes = trip.notes;
    var accommodations = {
    accommodations_url: trip.accommodations.accommodations_url,
    accommodations_type: trip.accommodations.accommodations_type,
    accommodations_price: trip.accommodations.accommodations_price,
    accommodations_address: {
        number: trip.accommodations.accommodations_address.number,
        street: trip.accommodations.accommodations_address.street,
        street_type: trip.accommodations.accommodations_address.street_type,
        city: trip.accommodations.accommodations_address.city,
    }
}
    var price = trip.cityOrigin.transport_price + trip.cityToVisit.transport_price + accommodations.accommodations_price;
    var tickets = trip.cityOrigin.transportUrl;
    
console.log("--------------------------------------------")

    // document.querySelector(".information_trip.city").innerHTML = city;
    document.querySelector("#details .dates").innerHTML = date;
    document.querySelector("#details .trip_name").innerHTML = title;
    document.querySelector("#details .place").innerHTML = from + " | " + to;
    document.querySelector("#details .accommodations").innerHTML = fontAwersome(accommodations_type) +" "+ accommodations_type +" in "+ accommodations.accommodations_address.city;
    document.querySelector("#details .transports").innerHTML = fontAwersome(transports_type);
    document.querySelector("#tickets").href = tickets? "" : tickets[0];
    // document.querySelector("#details .accommodations_city").innerHTML =" in "+ accommodations.accommodations_address.city;
    document.querySelector("#details .price").innerHTML = price + " €";
    completeList("activities",activities);
    completeList("necessaryThings",necessaryThings);
    document.getElementById("notes").innerHTML = notes;
    // document.querySelector(".information_trip .dateGo").innerHTML = dateGo;
    // document.querySelector(".information_trip .dateReturn").innerHTML = dateReturn;
    document.getElementById("details").classList.remove("is_hidden");
    document.getElementById("details").classList.add("slide-in-left");
    document.getElementById("background").classList.add("kenburns-right");
    document.getElementById("background").classList.remove("kenburns-left");
})
.catch(apiErr => console.log(apiErr))
}

function takeOffPreview (   ) { 
    eraseContent([
    document.querySelector("#details .dates"),
    document.querySelector("#details .trip_name"),
    document.querySelector("#details .place"),
    document.querySelector("#details .transports"),
    document.getElementById("activities"),
    document.getElementById("necessaryThings"),
    document.getElementById("notes"),
])
document.querySelector("#tickets").href = ""
    document.getElementById("details").classList.add("is_hidden");
    document.getElementById("details").classList.remove("slide-in-left");
    document.getElementById("background").classList.remove("kenburns-right")
    document.getElementById("background").classList.add("kenburns-left");



    // document.querySelector(".information_trip .country").innerHTML="";
    // document.querySelector(".information_trip .dateGo").innerHTML="";
    // document.querySelector(".information_trip .dateReturn").innerHTML="";
}

const eraseContent = ArrElement => ArrElement.forEach(element => element.innerHTML = "")

const completeList  = (nameArr,arr) => arr.forEach((a)=> document.getElementById(nameArr).innerHTML += ("<li>"+a+"</li>"))

function fontAwersome(option) {
    let renderAwersome = ""
    if(typeof option === "string") option = [option]
    console.log(option)
    option.forEach(a=>{
    if (a === "house" || a === "hostel" ) renderAwersome+='<i class="fas fa-home"></i>'
    if (a === "hotel") renderAwersome+='<i class="fas fa-hotel"></i>'
    if (a === "villa") renderAwersome+='<i class="fab fa-fort-awesome"></i>'
    if (a === "tent") renderAwersome+='<i class="fas fa-campground"></i>'
    if (a === "private room") renderAwersome+='<i class="fab fa-airbnb"></i>'
    if (a === "car") renderAwersome+='<i class="fas fa-car"></i>'
    if (a === "beach") renderAwersome+='<i class="fas fa-umbrella-beach"></i>'
    if (a === "boat") renderAwersome+='<i class="fas fa-ship"></i>'
    if (a === "bike") renderAwersome+='<i class="fas fa-bicycle"></i>'
    if (a === "motorcycle") renderAwersome+='<i class="fas fa-motorcycle"></i>'
    if (a === "walk") renderAwersome+='<i class="fas fa-walking"></i>'
    if (a === "train") renderAwersome+='<i class="fas fa-train"></i>'
    if (a === "bus") renderAwersome+='<i class="fas fa-bus"></i>'
    if (a === "plane") renderAwersome+='<i class="fas fa-plane"></i>'})
    
    return renderAwersome;
  };
