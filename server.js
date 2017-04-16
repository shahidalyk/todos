var express = require('express');
var app = express();

var PORT = process.env.PORT || 3001;

app.all('/*', function (req, res) {
	// body...
	res.send('\
		<!Doctype html>\
		<html>\
			<head>\
				<title>Mean ToDo App</title>\
				<base href="/">\
			</head>\
			<body>\
				<div ui-view></div>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
	');
});

app.listen(PORT, function () {
	// body...
	console.log('Server running on ' + PORT);
})