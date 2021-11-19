$('#skillHeading').css('visibility','hidden');
$('#skillContents01').css('visibility','hidden');
$('#skillContents02').css('visibility','hidden');
$('#workHeading').css('visibility','hidden');
$('#workCard01').css('visibility','hidden');
$('#workCard02').css('visibility','hidden');
$('#workCard03').css('visibility','hidden');
$('#workCard04').css('visibility','hidden');
$('#workCard05').css('visibility','hidden');
$('#workCard06').css('visibility','hidden');
$('#aboutHeading').css('visibility','hidden');
$('#aboutImg').css('visibility','hidden');
$('#aboutText').css('visibility','hidden');
$('#contactHeading').css('visibility','hidden');
$('#contactContents').css('visibility','hidden');

const targetPosition_skillHeading = $('#skillHeading').offset().top;
const targetPosition_workHeading = $('#workHeading').offset().top;
const targetPosition_aboutHeading = $('#aboutHeading').offset().top;
const targetPosition_contactHeading = $('#contactHeading').offset().top;


$(window).scroll(function() {
  const windowHeight = $(window).height();
  const topWindow = $(window).scrollTop();

  // skill
  if(topWindow > targetPosition_skillHeading - windowHeight) {
    $('#skillHeading').addClass("fadeInDown_skillHeading")
    $('#skillContents01').addClass("fadeInDown_skillContents01")
    $('#skillContents02').addClass("fadeInDown_skillContents02")
  } else {
    $('#skillHeading').removeClass("fadeInDown_skillHeading")
    $('#skillHeading').css('visibility','hidden');
    $('#skillContents01').removeClass("fadeInDown_skillContents01")
    $('#skillContents01').css('visibility','hidden');
    $('#skillContents02').removeClass("fadeInDown_skillContents02")
    $('#skillContents02').css('visibility','hidden');
  }

  // work
  if(topWindow > targetPosition_workHeading - windowHeight) {
    $('#workHeading').addClass("fadeInDown_workHeading")
    $('#workCard01').addClass("fadeInDown_workCard01")
    $('#workCard02').addClass("fadeInDown_workCard02")
    $('#workCard03').addClass("fadeInDown_workCard03")
    $('#workCard04').addClass("fadeInDown_workCard04")
    $('#workCard05').addClass("fadeInDown_workCard05")
    $('#workCard06').addClass("fadeInDown_workCard06")
  } else {
    $('#workHeading').removeClass("fadeInDown_workHeading")
    $('#workHeading').css('visibility','hidden');
    $('#workCard01').removeClass("fadeInDown_workCard01")
    $('#workCard01').css('visibility','hidden');
    $('#workCard02').removeClass("fadeInDown_workCard02")
    $('#workCard02').css('visibility','hidden');
    $('#workCard03').removeClass("fadeInDown_workCard03")
    $('#workCard03').css('visibility','hidden');
    $('#workCard04').removeClass("fadeInDown_workCard04")
    $('#workCard04').css('visibility','hidden');
    $('#workCard05').removeClass("fadeInDown_workCard05")
    $('#workCard05').css('visibility','hidden');
    $('#workCard06').removeClass("fadeInDown_workCard06")
    $('#workCard06').css('visibility','hidden');
  }

  // about
  if(topWindow > targetPosition_aboutHeading - windowHeight) {
    $('#aboutHeading').addClass("fadeInDown_aboutHeading")
    $('#aboutImg').addClass("fadeInDown_aboutImg")
    $('#aboutText').addClass("fadeInDown_aboutText")
  } else {
    $('#aboutHeading').removeClass("fadeInDown_aboutHeading")
    $('#aboutHeading').css('visibility','hidden');
    $('#aboutImg').removeClass("fadeInDown_aboutImg")
    $('#aboutImg').css('visibility','hidden');
    $('#aboutText').removeClass("fadeInDown_aboutText")
    $('#aboutText').css('visibility','hidden');
  }

  // contact
  if(topWindow > targetPosition_contactHeading - windowHeight) {
    $('#contactHeading').addClass("fadeInDown_contactHeading")
    $('#contactContents').addClass("fadeInDown_contactContents")
  } else {
    $('#contactHeading').removeClass("fadeInDown_contactHeading")
    $('#contactHeading').css('visibility','hidden');
    $('#contactContents').removeClass("fadeInDown_contactContents")
    $('#contactContents').css('visibility','hidden');
  }
})