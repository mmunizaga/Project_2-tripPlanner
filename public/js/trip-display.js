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
    var country = trip.cityToVisit.country;
    var dateGo = formatDate(trip.cityOrigin.date).toDateString();
    var dateReturn = formatDate(trip.cityToVisit.date).toDateString();
console.log("--------------------------------------------")
console.log(trip)
    // document.querySelector(".information_trip.city").innerHTML = city;
    document.querySelector("#details .dates").innerHTML = date;
    document.querySelector("#details .trip_name").innerHTML = title;
    document.querySelector("#details .place").innerHTML = from + " | " + to;
    document.querySelector("#details .accommodations").innerHTML = fontAwersome(accommodations_type);
    document.querySelector("#details .transports").innerHTML = fontAwersome(transports_type);
    // document.querySelector(".information_trip .dateGo").innerHTML = dateGo;
    // document.querySelector(".information_trip .dateReturn").innerHTML = dateReturn;
    document.querySelector("#details").classList.remove("is_hidden");
    document.querySelector("#details").classList.add("slide-in-left");
    document.querySelector("#background").classList.add("kenburns-right");
    document.querySelector("#background").classList.remove("kenburns-left");
})
.catch(apiErr => console.log(apiErr))
}

function takeOffPreview (   ) { 
    document.querySelector("#details .dates").innerHTML = "";
    document.querySelector("#details .trip_name").innerHTML = "";
    document.querySelector("#details .place").innerHTML = "";
    document.querySelector("#details .transports").innerHTML = "";
     
    document.querySelector("#details").classList.add("is_hidden");
    document.querySelector("#details").classList.remove("slide-in-left");
    document.querySelector("#background").classList.remove("kenburns-right")
    document.querySelector("#background").classList.add("kenburns-left");



    // document.querySelector(".information_trip .country").innerHTML="";
    // document.querySelector(".information_trip .dateGo").innerHTML="";
    // document.querySelector(".information_trip .dateReturn").innerHTML="";
}

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
    console.log(renderAwersome);
    
    return renderAwersome;
  };
