$(document).ready(function(){
  $(".buttonFlag:not(#0)").fadeTo(0, 0.3);
  $("#mainFlag").attr("data-style", "0");
  $(".buttonFlag.1").fadeTo(0, 1, draw());
  drawMiniFlags();
  
  $(".buttonFlag").click(function(){
    $(".buttonFlag").not(this).fadeTo(100, 0.3);
    $("#mainFlag").attr("data-style", this.id);
    $(this).fadeTo(500, 1, draw());
    //$("#debug").text(this.id);
  });
  
  $("label").click(function(){
    $("label").not(this).attr('class', 'btn btn-default');
    $(this).attr('class', 'btn btn-primary');
    $("#mainFlag").attr("data-style", $(this).data("value"));
    draw();
    //$(this).text($(this).children().id);
  });
});
