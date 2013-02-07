src = src/xframe.js
dest = xframe.js
dest_min = xframe.min.js
header = HEADER.txt

all: build

build:
	cat $(header) $(src) > $(dest)
	cat $(header) > $(dest_min)
	uglifyjs $(src) >> $(dest_min)
