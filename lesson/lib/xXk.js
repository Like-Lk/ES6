"use strict";

$(function () {
  $('#outer ul li').click(function () {
    var index = $(this).index();
    $(this).eq(index).addClass('current').siblings().removeClass('current');
    $('#content ul').eq(index).show().siblings().hide();
  });
});