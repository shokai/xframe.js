var Tv = function(selector){
  var self = this;
  this.container = $(selector);
  var iframe_css = {
    width: "800px",
    height: "100%",
    top: "0px",
    left: "0px",
    position: "absolute"
  };
  this.iframe = $("<iframe>").css(iframe_css).attr({
    scrolling : "no"
  });
  this.__height = 0;
  this.__width = 0;
  this.container.html(this.iframe);
  this.__defineGetter__("left", function(){
    return self.iframe.position().left;
  });
  this.__defineGetter__("top", function(){
    return self.iframe.position().top;
  });
  this.__defineSetter__("left", function(val){
    self.iframe.position().left = val;
  });
  this.__defineSetter__("top", function(val){
    if(val > 0) val = 0;
    self.iframe.height(self.__height - val);
    self.iframe.css("top", val);
  });
  this.__defineSetter__("left", function(val){
    if(val > 0) val = 0;
    self.iframe.width(self.__width - val);
    self.iframe.css("left", val);
  });
  this.load = function(url){
    console.log(url);
    self.iframe.attr("src",url);
    self.iframe.css(iframe_css);
    self.__height = self.iframe.height();
    self.__width = self.iframe.width();
  };
};

var tv;

$(function(){
  tv = new Tv("div#tv");
  $("#btn_go").click(function(){
    tv.load($("#url").val());
  });
  $("#btn_down").click(function(){
    tv.top = tv.top - 20;
  });
  $("#btn_up").click(function(){
    tv.top = tv.top + 20;
  });
});
