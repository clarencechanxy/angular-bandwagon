/* author: Kim Choy Kum Jin
   info: kumjin.choy@gmail.com */   

function getCurrentPath() {
  return document.location.href.split('#/')[1];
}

dayNames = ["SUNDAY","MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
month = ["JANUARY", "FEBRUARY", "MARCH",  "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
short_month = ["Jan", "Feb", "Mar",  "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function showToday() {
  today = new Date();
  computeCalendar();
}

function computeCalendar() {
  // get current date first
  var current_d = $("#calendar").data("date");
  var current_m = $("#calendar").data("month");
  var current_y = $("#calendar").data("year");
  // save it to data attributes and draw calendar again
  var new_day_d = today.getDate();
  var new_day_m = today.getMonth()+1;
  var new_day_y = today.getFullYear();
  $("#calendar").data("date", new_day_d)
                .data("month", new_day_m)
                .data("year", new_day_y);
  
  $(".date_of_mth").html(new_day_d);
  $(".day_name").html(dayNames[today.getDay()]);
  $(".month").html(month[new_day_m-1]);
  
  $("#date_query").val(new_day_d + " " + (short_month[new_day_m-1]) + " " + (new_day_y % 100)).change(); 
}

function nextDay() {
  today.setDate(today.getDate()+1);
  computeCalendar();
}

function prevDay() {
  today.setDate(today.getDate()-1);
  computeCalendar();
}

// Calendar
showToday();
  
$("#calendar .new_day").click(function(e) {
  nextDay();
});

$("#calendar .prev_day").click(function() {
  prevDay();
});

$("#calendar .today").click(function() {
  showToday();
});