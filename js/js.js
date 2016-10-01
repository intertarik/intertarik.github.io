// NOTE: Don't use this token, replace it with your own client access token.
$.jribbble.setToken('a60771bc9232b174f87c996d3668144c1df50ad9477a8ea8e938eebab1166337');

$.jribbble.users('intertarik').shots({per_page: 12}).then(function(shots) {
  var html = [];

  shots.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });

  $('.shots').html(html.join(''));
});

$(function(){
      $(".greating").typed({
        strings: ["Hello.", "Salam.", "Ni Hao.", "Salut.", "مرحبا"],
        typeSpeed: 100,
        loop:true,
        shuffle:true
      });
  });
