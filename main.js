$(function(){
  var xframe = new XFrame("div#tv");
  $("#btn_go").click(function(){
    var url = $("#url").val();
    console.log("load "+url);
    xframe.load(url);
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
