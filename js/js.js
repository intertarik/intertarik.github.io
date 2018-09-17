// Set the Access Token
var accessToken = 'e653f3b88aecc3a3e65b77a11c39324de9f493c6b4121a3c73a9083b5a446333';

// Call Dribble v2 API
$.ajax({
  url: 'https://api.dribbble.com/v2/user/shots?access_token=' + accessToken,
  dataType: 'json',
  type: 'GET',
  success: function (data) {
    if (data.length > 0) {
      $.each(data.reverse(), function (i, val) {
        $('#shots').prepend(
          '<a class="shot" target="_blank" href="' + val.html_url + '" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="' + val.images.hidpi + '"/></a>'
        )
      })
    }
    else {
      $('#shots').append('<p>No shots yet!</p>');
    }
  }
});


// NOTE: Don't use this token, replace it with your own client access token.
$.jribbble.setToken('a60771bc9232b174f87c996d3668144c1df50ad9477a8ea8e938eebab1166337');

$.jribbble.users('intertarik').shots({ per_page: 12 }).then(function (shots) {
  var html = [];

  shots.forEach(function (shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });

  $('.shots').html(html.join(''));
});

$(function () {
  $(".greating").typed({
    strings: ["Hello.", "Salam.", "Ni Hao.", "Salut.", "مرحبا"],
    typeSpeed: 100,
    loop: true,
    shuffle: true
  });
});
$(document).ready(function () {
  $('.block-right').addClass('hide');
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $(".block-left").addClass('animated slideInLeft').one(animationEnd, function () {
    $('.block-right').addClass('animated fadeIn').removeClass('hide');
  });
})
