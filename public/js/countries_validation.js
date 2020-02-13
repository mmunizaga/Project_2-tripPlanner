import countries from "./countries.js";

const countryInput = document.querySelector('.country');

// countryInput.oninput = function(e) {
//   const value = e.target.value;

//     console.log("is a match ?", countries.map(cn => cn.name.toLowerCase()).includes(value.toLowerCase()));

// // var match = false;
// //   countries.forEach(country => {
// //     country.name.toLowerCase() === value.toLowerCase() ? (match = true) : (match = false);
// //   });
// //   console.log(match);
// };


const countryList = document.querySelector('.listCountry');


countries.forEach(country => {
    countryList.innerHTML += `<option value="${country.name}">`
});
