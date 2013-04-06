// xframe.js v0.0.4
// https://github.com/shokai/xframe.js
// (c) 2013 Sho Hashimoto <hashimoto@shokai.org>
// The MIT License
var XFrame = function(selector){
  var self = this;
  this.url = null;
  this.parent = $(selector);
  this.container = $("<div>").css({
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0,
    overflow: "hidden"
  });
  this.parent.html(this.container);
  var iframe_css = {
    width: this.container.width(),
    height: this.container.height(),
    margin: 0,
    padding: 0
  };
  this.iframe = $("<iframe>").css(iframe_css).attr({
    scrolling : "no"
  });
  this.container.html(this.iframe);
  var mouseScroll = false;
  this.__defineSetter__("mouseScroll", function(val){
    mouseScroll = val ? true : false;
    self.iframe.attr({scrolling : (val ? "yes" : "no")});
  });
  this.__defineGetter__("mouseScroll", function(){
    return mouseScroll;
  });
  this.__defineGetter__("left", function(){
    return self.iframe.position().left * -1;
  });
  this.__defineGetter__("top", function(){
    return parseInt(self.iframe.css("margin-top")) * -1;
  });
  this.__defineSetter__("left", function(val){
    return parseInt(self.iframe.css("margin-left"));
  });
  this.__defineSetter__("top", function(val){
    if(val < 0) val = 0;
    self.iframe.height(self.container.height() + val);
    self.iframe.css("margin-top", val * -1);
  });
  this.__defineSetter__("left", function(val){
    if(val < 0) val = 0;
    self.iframe.width(self.container.width() + val);
    self.iframe.css("margin-left", val * -1);
  });
  this.load = function(url){
    self.url = url;
    self.iframe.attr("src", url);
    self.iframe.css(iframe_css);
  };
  this.scrollY = function(pix){
    self.top = self.top + pix;
  };
  this.scrollX = function(pix){
    self.left = self.left + pix;
  };
};
