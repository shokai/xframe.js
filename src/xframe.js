var XFrame = function(selector){
  var self = this;
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
  this.__defineGetter__("left", function(){
    return self.iframe.position().left;
  });
  this.__defineGetter__("top", function(){
    return parseInt(self.iframe.css("margin-top"));
  });
  this.__defineSetter__("left", function(val){
    return parseInt(self.iframe.css("margin-left"));
  });
  this.__defineSetter__("top", function(val){
    if(val > 0) val = 0;
    self.iframe.height(self.container.height() - val);
    self.iframe.css("margin-top", val);
  });
  this.__defineSetter__("left", function(val){
    if(val > 0) val = 0;
    self.iframe.width(self.container.width() - val);
    self.iframe.css("margin-left", val);
  });
  this.load = function(url){
    self.iframe.attr("src",url);
    self.iframe.css(iframe_css);
  };
  this.scrollY = function(pix){
    self.top = self.top - pix;
  };
  this.scrollX = function(pix){
    self.left = self.left - pix;
  };
};
