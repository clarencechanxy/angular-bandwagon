/* author: Kim Choy Kum Jin
   info: kumjin.choy@gmail.com */   

function getCurrentPath() {
  var path = document.location.href.split('#/')[1]; 
  return path;
}

function showCalendarToday() {
  today = new Date();
  d = today.getDate();
  dn = today.getDay();
  m = today.getMonth();
  y = today.getFullYear();
  
  dayNames = new Array("SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY");    
  month = new Array("JANUARY", "FEBRUARY", "MARCH",  "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER");
  short_month = new Array("Jan", "Feb", "Mar",  "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec");  
  var current_day = d;
  var day_name = dayNames[dn];
  var current_month = month[m];
  
  $(".day_name").html(day_name);
  $(".date_of_mth").html(current_day);
  $(".month").html(current_month);

  $("#calendar").data("date", d);
  $("#calendar").data("month", m+1);
  $("#calendar").data("year", y);
  
  // filter by date by default
  $("#date_query").val(current_day + " " + short_month[m] + " " + y.toString().slice(2)).change();
}

function computeCalendar(nextOrPrev) {
  // get current date first
  var current_d = $("#calendar").data("date");
  var current_m = $("#calendar").data("month");
  var current_y = $("#calendar").data("year");
  
  // init a new date
  var current_date = new Date(current_m + " " + current_d+',' + current_y);
  
  // compute a next or previous day
  new_day = today;
  nextOrPrev();
  
  // save it to data attributes and draw calendar again
  var new_day_d = new_day.getDate();
  var new_day_m = new_day.getMonth()+1;
  var new_day_y = new_day.getFullYear();
  $("#calendar").data("date", new_day_d);
  $("#calendar").data("month", new_day_m);
  $("#calendar").data("year", new_day_y);
  
  $(".date_of_mth").html(new_day_d);
  $(".day_name").html(dayNames[new_day.getDay()]);
  $(".month").html(month[new_day_m-1]);
  
  $("#date_query").val(new_day_d + " " + (short_month[new_day_m-1]) + " " + new_day_y.toString().slice(2)).change(); 
}

function nextDay() {
  new_day.setDate(today.getDate()+1);
}

function prevDay() {
  new_day.setDate(today.getDate()-1);
}

// Calendar
showCalendarToday();
  
$("#calendar .new_day").click(function() {
  computeCalendar(nextDay);
});

$("#calendar .prev_day").click(function() {
  computeCalendar(prevDay);
});

$("#calendar .today").click(function() {
  showCalendarToday();
});

