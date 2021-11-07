$('.animation01').css('visibility','hidden');
$('.animation02').css('visibility','hidden');
$('.animation03').css('visibility','hidden');
$('.animation04').css('visibility','hidden');
$('.animation05').css('visibility','hidden');
$('.animation06').css('visibility','hidden');
$('#newsHeading').css('visibility','hidden');
$('#newsContent').css('visibility','hidden');
$('#newsBtn').css('visibility','hidden');
$('#menuHeading').css('visibility','hidden');
$('#menuBtn').css('visibility','hidden');
$('#accessHeading').css('visibility','hidden');


const targetPosition01 = $('#animation01').offset().top;
const targetPosition02 = $('#animation02').offset().top;
const targetPosition03 = $('#animation03').offset().top;
const targetPosition04 = $('#animation04').offset().top;
const targetPosition05 = $('#animation05').offset().top;
const targetPosition06 = $('#animation06').offset().top;
const targetPosition_newsHeading = $('#newsHeading').offset().top;
const targetPosition_menuHeading = $('#menuHeading').offset().top;
const targetPosition_accessHeading = $('#accessHeading').offset().top;

$(window).scroll(function() {
  const windowHeight = $(window).height();
  const topWindow = $(window).scrollTop();

  // 01
  if(topWindow > targetPosition01 - windowHeight) {
    $('#animation01').addClass("fadeInDown01")
  } else {
    $('#animation01').removeClass("fadeInDown01")
    $('#animation01').css('visibility','hidden');
  }

  // 02
  if(topWindow > targetPosition02 - windowHeight) {
    $('#animation02').addClass("fadeInDown02")
  } else {
    $('#animation02').removeClass("fadeInDown02")
    $('#animation02').css('visibility','hidden');
  }

  // 03
  if(topWindow > targetPosition03 - windowHeight) {
    $('#animation03').addClass("fadeInDown03")
  } else {
    $('#animation03').removeClass("fadeInDown03")
    $('#animation03').css('visibility','hidden');
  }

  // 04
  if(topWindow > targetPosition04 - windowHeight) {
    $('#animation04').addClass("fadeInDown01")
  } else {
    $('#animation04').removeClass("fadeInDown01")
    $('#animation04').css('visibility','hidden');
  }

  // 05
  if(topWindow > targetPosition05 - windowHeight) {
    $('#animation05').addClass("fadeInDown02")
  } else {
    $('#animation05').removeClass("fadeInDown02")
    $('#animation05').css('visibility','hidden');
  }

  // 06
  if(topWindow > targetPosition06 - windowHeight) {
    $('#animation06').addClass("fadeInDown03")
  } else {
    $('#animation06').removeClass("fadeInDown03")
    $('#animation06').css('visibility','hidden');
  }

  // news
  if(topWindow > targetPosition_newsHeading - windowHeight) {
    $('#newsHeading').addClass("fadeInDown_newsHeading")
    $('#newsContent').addClass("fadeInDown_content")
    $('#newsBtn').addClass("fadeInDown_btn")
  } else {
    $('#newsHeading').removeClass("fadeInDown_newsHeading")
    $('#newsHeading').css('visibility','hidden');
    $('#newsContent').removeClass("fadeInDown_content")
    $('#newsContent').css('visibility','hidden');
    $('#newsBtn').removeClass("fadeInDown_btn")
    $('#newsBtn').css('visibility','hidden');
  }

  // menu
  if(topWindow > targetPosition_menuHeading - windowHeight) {
    $('#menuHeading').addClass("fadeInDown_menuHeading")
    $('#menuBtn').addClass("fadeInDown_menuBtn")
  } else {
    $('#menuHeading').removeClass("fadeInDown_menuHeading")
    $('#menuHeading').css('visibility','hidden');
    $('#menuBtn').removeClass("fadeInDown_menuBtn")
    $('#menuBtn').css('visibility','hidden');
  }

  // accessHeading
  if(topWindow > targetPosition_accessHeading - windowHeight) {
    $('#accessHeading').addClass("fadeInDown_accessHeading")
  } else {
    $('#accessHeading').removeClass("fadeInDown_accessHeading")
    $('#accessHeading').css('visibility','hidden');
  }
})