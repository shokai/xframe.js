XFrame.js
=========
Cross Domain iframe scroll

[demo](http://shokai.github.io/xframe.js/)

Requirements
------------
* jQuery
* not works on file://


Usage
-----

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="xframe.js"></script>
```

```html
<div id="tv"></div>
```

```javascript
var xframe = new XFrame("div#tv");
```

load page
```javascript
xframe.load("http://shokai.org");
```

scroll
```javascript
xframe.scrollX(10);
xframe.scrollY(100);
xframe.top = 200;
xframe.left = 50;
```

enable/disable mouse scroll
```javascript
xframe.mouseScroll = true;
xframe.mouseScroll = false;
```

Build
-----

edit "HEADER.txt"

    % npm install -g uglify-js
    % make build

=> xframe.js
