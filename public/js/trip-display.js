import APIHandler from "./APIHandler.js"

document.querySelectorAll('.image-container img').forEach(image => {
    image.onmouseover = displayPreview
});

document.querySelectorAll('.image-container img').forEach(image => {
    image.onmouseout = takeOffPreview
});

function formatDate(x) {
    var date = new Date(x);
    return date;
};

function displayPreview (e) {
var url = e.target.id;
APIHandler
.get(`/preview-trip${url}`)
.then(apiRes => {
    var trip = apiRes.data;
    var city = trip.cityToVisit.city;
    var country = trip.cityToVisit.country;
    var dateGo = formatDate(trip.cityOrigin.date).toDateString();
    var dateReturn = formatDate(trip.cityToVisit.date).toDateString();

    document.querySelector(".information_trip .city").innerHTML = city;
    document.querySelector(".information_trip .country").innerHTML = country;
    document.querySelector(".information_trip .dateGo").innerHTML = dateGo;
    document.querySelector(".information_trip .dateReturn").innerHTML = dateReturn;
})
.catch(apiErr => console.log(apiErr))
}

function takeOffPreview (   ) {
    document.querySelector(".information_trip .city").innerHTML ="";
    document.querySelector(".information_trip .country").innerHTML="";
    document.querySelector(".information_trip .dateGo").innerHTML="";
    document.querySelector(".information_trip .dateReturn").innerHTML="";
}

