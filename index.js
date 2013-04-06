var xframe = null;

$(function(){
  xframe = new XFrame("div#tv");

  $("#btn_go").click(function(){
    var url = $("#url").val();
    console.log("load "+url);
    xframe.load(url);
  });

  $("#check_scroll").click(function(e){
    xframe.mouseScroll = e.currentTarget.checked;
    $("#btn_go").click();
  });

  $("#btn_down").click(function(){
    xframe.scrollY(30);
  });

  $("#btn_up").click(function(){
    xframe.scrollY(-30);
  });

  $("#btn_right").click(function(){
    xframe.scrollX(30);
  });

  $("#btn_left").click(function(){
    xframe.scrollX(-30);
  });
});
