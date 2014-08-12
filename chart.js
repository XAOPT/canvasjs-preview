var http = require('http'),
    url = require("url"),
    fs = require('fs'),
    path = require("path"),
    data = require('./data/data_1.4.1.js').get_data;

var server = http.createServer(function(req, res) {

    var uri = url.parse(req.url).pathname,
        filename = path.join(process.cwd(), uri);

    fs.exists(filename, function(exists) {
        if (!exists) {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404 Not Found\n");
            res.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) {
            filename += '/propertygrid.html';
        }

        fs.readFile(filename, "binary", function(err, file) {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write(err + "\n");
                res.end();
                return;
            }

            res.writeHead(200);
            res.write(file, "binary");
            res.end();
        });
    });

    req.on('data', function (chunk) {
        answer = JSON.parse(chunk);

        var temp = answer.data;
        answer.data = [temp];

        if (typeof answer.options !== "undefined") {
            temp = answer.options;
            delete answer.options;

            for (var prop in temp) {
                answer[prop] = temp[prop];
            }
        }

        if (typeof data[answer.data[0].type] !== 'undefined')
            answer.data[0].dataPoints = data[answer.data[0].type];
        else if (typeof data['column'] !== 'undefined')
            answer.data[0].dataPoints = data['column'];
        else
            answer.data[0].dataPoints = [];

        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*"
        });
        res.write(JSON.stringify(answer));
        res.end();
    });

});

module.exports = server;
if (!module.parent) {
    server.listen(3011)
}