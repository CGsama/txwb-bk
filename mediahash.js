var fs = require('fs');

str = fs.readFileSync(process.argv[2]).toString();
str.match(/http:\/\/mblogpic.store.qq.com\/mblogpic\/(\w+)\//g).forEach(function(url){
	match = url.match(/http:\/\/mblogpic.store.qq.com\/mblogpic\/(\w+)\//);
	fs.appendFileSync("media.store.hash", match[1] + "\n");
});
str.match(/http:\/\/t0.qpic.cn\/mblogpic\/(\w+)\//g).forEach(function(url){
	match = url.match(/http:\/\/t0.qpic.cn\/mblogpic\/(\w+)\//);
	fs.appendFileSync("media.t0.hash", match[1] + "\n");
});
str.match(/http:\/\/t1.qpic.cn\/mblogpic\/(\w+)\//g).forEach(function(url){
	match = url.match(/http:\/\/t1.qpic.cn\/mblogpic\/(\w+)\//);
	fs.appendFileSync("media.t1.hash", match[1] + "\n");
});
str.match(/http:\/\/t2.qpic.cn\/mblogpic\/(\w+)\//g).forEach(function(url){
	match = url.match(/http:\/\/t2.qpic.cn\/mblogpic\/(\w+)\//);
	fs.appendFileSync("media.t2.hash", match[1] + "\n");
});

hosts=["store", "t0", "t1", "t2"];
hosts.forEach(function(host){
	mb = fs.readFileSync("media." + host + ".hash").toString().split(/\r?\n/);
	arr = [];

	mb.forEach(function(line){
		if(! arr.includes(line)){
			arr.push(line);
		}
	});

	fs.writeFileSync("media." + host + ".hash", "");

	arr.forEach(function(line){
		fs.appendFileSync("media." + host + ".hash", line + "\n");
	});
});
