const hbs = require("hbs");
const moment = require("moment");

// CUSTOM HELPERS

// function below: add the ternary operator functionnality to .hbs files
// usage : {{ ternary true "yay" "nay " }} => prints yay
// usage : {{ ternary NaN "yay" "nay " }} => prints nay

hbs.registerHelper("ternary", (test, yes, no) => (test ? yes : no));

// add comparison operator feature to hbs templates
/* 

USAGE =>

{{#compare 1 10 operator="<" }}
  awesome, 1 is less thant 10 !!!
{{/compare }}
*/

hbs.registerHelper("compare", function(lvalue, rvalue, options) {
  if (arguments.length < 3)
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

  var operator = options.hash.operator || "==";

  var operators = {
    "==": function(l, r) {
      return l == r;
    },
    "===": function(l, r) {
      return l === r;
    },
    "!=": function(l, r) {
      return l != r;
    },
    "<": function(l, r) {
      return l < r;
    },
    ">": function(l, r) {
      return l > r;
    },
    "<=": function(l, r) {
      return l <= r;
    },
    ">=": function(l, r) {
      return l >= r;
    },
    typeof: function(l, r) {
      return typeof l == r;
    }
  };

  if (!operators[operator])
    throw new Error(
      "Handlerbars Helper 'compare' doesn't know the operator " + operator
    );

  var result = operators[operator](lvalue, rvalue);

  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper("format-date", function(date,rule) {
  if(!rule) rule = "YYYY-MM-DD[T]HH:MM"
  return moment(date).format(rule);
});

hbs.registerHelper("now", function() {
  return moment().format("YYYY-MM-DD[T]HH:MM");
});

hbs.registerHelper("fontAwersome", function(option) {
  const renderAwersome = ""
  if(typeof option === "string") option = [option]

  option.forEach(a=>{
  if (a === "house" || a === "hostel" ) renderAwersome+='<i class="fas fa-home"></i>'
  if (a === "hotel") renderAwersome+='<i class="fas fa-hotel"></i>'
  if (a === "villa") renderAwersome+='<i class="fab fa-fort-awesome"></i>'
  if (a === "tent") renderAwersome+='<i class="fas fa-campground"></i>'
  if (a === "private room") renderAwersome+='<i class="fab fa-airbnb"></i>'
  if (a === "car") renderAwersome+='<i class="fas fa-car"></i>'
  if (a === "beach") renderAwersome+='<i class="fas fa-umbrella-beach"></i>'})
  
  return renderAwersome;
});

hbs.registerHelper("isChecked", function(lvalue, arrvalue) {
  return arrvalue ? (arrvalue.includes(lvalue) ? "checked" : "") : "";
});

hbs.registerHelper("arrayElement", function(array, index) {
  return array[index] ? array[index] : "";
});
