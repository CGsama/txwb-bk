var fs = require('fs');

str = fs.readFileSync("txwb.bak").toString();
str.match(/http:\/\/t1.qpic.cn\/mblogpic\/(\w+)\//g).forEach(function(url){
	match = url.match(/http:\/\/t1.qpic.cn\/mblogpic\/(\w+)\//);
	fs.appendFileSync("media.hash", match[1] + "\n");
});

mb = fs.readFileSync("media.hash").toString().split(/\r?\n/);
arr = [];

mb.forEach(function(line){
	if(! arr.includes(line)){
		arr.push(line);
	}
});

fs.writeFileSync("media.hash", "");

arr.forEach(function(line){
	fs.appendFileSync("media.hash", line + "\n");
});
