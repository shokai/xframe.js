$(function(){
  var xframe = new XFrame("div#tv");
  $("#btn_go").click(function(){
    xframe.load($("#url").val());
  });
  $("#btn_down").click(function(){
    xframe.scrollY(20);
  });
  $("#btn_up").click(function(){
    xframe.scrollY(-20);
  });
  $("#btn_right").click(function(){
    xframe.scrollX(20);
  });
  $("#btn_left").click(function(){
    xframe.scrollX(-20);
  });
});
