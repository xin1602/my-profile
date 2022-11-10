// $("#top").click(function () {
//   $("html,body").animate({ scrollTop: 0 })
//   //   $("#totop").hide()
//   return false
// })

$(window).scroll(function () {
  if ($(this).scrollTop() > 1000) {
    $("#totop").fadeIn()
  } else {
    $("#totop").fadeOut()
  }
})
