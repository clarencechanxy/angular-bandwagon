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
  
$("#calendar .next_day").click(nextDay);
$("#calendar .prev_day").click(prevDay);
$("#calendar .today").click(showToday);

// Tipsy for special gigs
function specialGigsHighlight() {
  $("table#events img.special_gig").tipsy({gravity: 's', live: true});
}

// Reset other filters
function resetFilters() {
  $("#date_query, #special_gig").val("").change();
}

// Mailchimp submit form
$("#mc-embedded-subscribe").click(function() {
  $(".error").remove();
  var notValid = false;
  var validEmailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var emailAddVal = $("#mce-EMAIL").val();
  
  if (emailAddVal == '') {
    notValid = true;
    $("#mce-EMAIL").after("<span class='error'>Please fill in an email address!</span>");
  }
  else if (!validEmailReg.test(emailAddVal)) {
    notValid = true;
    $("#mce-EMAIL").after("<span class='error'>Please fill in a valid email address!</span>");
  }
  if (notValid == true) {
    return false;
  }
  else {
    $('#mc_embed_signup').animate({
      left: '-=243',
    }, 200, function() {
      $(this).addClass('hidden');
      $("#mce-EMAIL").val("");
    });
  }
});

// Subscribe tab
$(".subscribe").click(function() {
  if($("#mc_embed_signup").hasClass('hidden')) {
    $('#mc_embed_signup').animate({
      left: '+=280',
    }, 200, function() {
      $(this).removeClass('hidden');
    }); 
  }
  else {
    $('#mc_embed_signup').animate({
      left: '-=280',
    }, 200, function() {
      $(this).addClass('hidden');
      $("#mce-EMAIL").val("");
    });
  }
});

searchItems = [];

$.each(events, function(index, elem) {
  if (elem.time == "-" || elem.time == "" || elem.time == "TBA") {
    var dateObjStr = {dateObj: Date.parse(elem.date.replace(/(..)$/, '20'+"$1"))};
  } 
  else {
    var time_str = elem.time.substr(0, 4).replace(/(..)$/, ':'+"$1");
    var dateObjStr = {dateObj: Date.parse(elem.date.replace(/(..)$/, '20'+"$1")+ " " + time_str)};    
  }
  $.extend(elem, dateObjStr);
  
  $.each(elem.genre.split('; '), function(index, value) {
    insertUniqueItem(value); 
  });
  insertUniqueItem(elem.name);
  insertUniqueItem(elem.place); 
});
  
function insertUniqueItem(value) {
  if ($.inArray(value, searchItems) === -1) {
    searchItems.push(value);
  }
}

function is_touch_device() {
  return !!('ontouchstart' in window) ? 1 : 0;
}

function showMoreInfo(event) {
  var tpl = '<div class="overlay"></div>\
              <ul class="mobile sub_menu"> \
                <li><a href="'+event.website+'" target="_blank" ><img src="img/btn_more.png"></a></li>\
                <li class="email"><a href="mailto:?subject='+event.name+"@"+event.place+", "+event.date+'"><img src="img/btn_email.png"></a></li>\
                <li class="twitter"><a href="#twitter_share" data-share-type="tweet"><img src="img/tweet_share.png"></a></li>\
                <li class="facebook"><a href="#fb_share" data-share-type="fb"><img src="img/fb_share.png"></a></li>\
              </ul>'
  $("header#bw").before(tpl);
  $(".overlay").height($(document).height());
  
  if (is_touch_device()) {
    $("ul.mobile.sub_menu").css("top", $(window).height()/2 + window.pageYOffset);
  }
  else {
    $("ul.mobile.sub_menu").css("top", $(window).height()/2);
  }

  $(".overlay").click(function() {
    $(this).remove();
    $(".mobile.sub_menu").remove();
  });
  $(".mobile.sub_menu li a").click(function() {
    socialShare(event.name, event.place, event.date, $(this).data('share-type'));
  });
}

// console.log('no of events: ' + events.length + ' | unique searchable items: ' + searchItems.length);