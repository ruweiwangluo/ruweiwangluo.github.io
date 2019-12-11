/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */
function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').show();
	}else{
		$('#gotop').hide();
	}
}
$(document).ready(function () {
  $('#particles').particleground({
    dotColor: '#3b485f',
    lineColor: '#3b485f'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });

  //学员
  var _index5 = 0;
  $("#four_flash .but_right img").click(function () {
    _index5++;
    var len = $(".flashBg ul.mobile li").length;
    if (_index5 + 5 > len) {
      $("#four_flash .flashBg ul.mobile").stop().append($("ul.mobile").html());
    }
    $("#four_flash .flashBg ul.mobile").stop().animate({
      left: -_index5 * 326
    }, 1000);
  });


  $("#four_flash .but_left img").click(function () {
    if (_index5 == 0) {
      $("ul.mobile").prepend($("ul.mobile").html());
      $("ul.mobile").css("left", "-1380px");
      _index5 = 6
    }
    _index5--;
    $("#four_flash .flashBg ul.mobile").stop().animate({
      left: -_index5 * 326
    }, 1000);
  });
  b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
  });
  $(window).scroll(function(e){
    b();		
  });
  $("body").on("mouseover", "#pinglun", function() {
    var html = '';
    html += '<div class=“dialogbox”><img src="img/erweima.png" /></div>';
    $(".dialog_main").append(html);
    $(".dialog_main").show();
  });
  $("body").on("mouseout", "#pinglun,#xiangguan", function() {
    $(".dialog_main img").remove();
    $(".dialog_main p").remove();
    $(".dialog_main").hide();
  });
  $("body").on("mouseover", "#xiangguan", function() {
    var html = '';
    html += '<div class=“dialogbox”><p>咨询热线：<br>18691450311</p>'+
    '<p>客服QQ：<br>2577011845</p></div>';
    $(".dialog_main").append(html);
    $(".dialog_main").show();
  });

  
});