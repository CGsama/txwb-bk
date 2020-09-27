var fs = require('fs');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();

var state = 0;

function saveNotes(){
setTimeout(nextPage, 2000);
driver.getCurrentUrl().then(function(url){
	fs.appendFileSync("txwb.bak", "<!-- URL:" + url + " -->\n\n\n");
});
driver.findElements(By.xpath('//*[@id="talkList"]/li')).then(function(items){
	items.forEach(function(item){
		item.getAttribute("id").then(function(id){
			item.getAttribute('outerHTML').then(function(msg){
				fs.appendFileSync("txwb.bak", "<!-- " + id + " -->");
				fs.appendFileSync("txwb.bak", msg);
				fs.appendFileSync("txwb.bak", "\n\n");
			});
		});
	});
});
}

function nextPage(){
	state = 0;
	driver.findElements(By.xpath('//*[@id="pageNav"]/a')).then(function(items){
		for(item of items){
			item.getAttribute('innerHTML').then(function(str){
				if(str.indexOf("下一页") != -1){
					if(state == 0){
						state = 1;
						item.click().then(function(){
							setTimeout(ifPageReady, 5000);
						});
					}
				}
			});
		}
	});
	setTimeout(function(){
		if(state == 0){
			date = "999999999";
			driver.getPageSource().then(function(str){
				str.match(/title="(20\d+)年(\d+)月(\d+)日/g).forEach(function(datestr){
					match = datestr.match(/title="(20\d+)年(\d+)月(\d+)日/);
					datestr = match[1] + ("000" + match[2]).slice(-2) + match[3];
					if(parseInt(date) > parseInt(datestr)){
						date = datestr;
					}
				});
			});
			setTimeout(function(){
				driver.get('http://t.qq.com/' + process.argv[2] + '/mine?filter=' + process.argv[4] + '&date=' + date);	
				ifPageReady();
			}, 2000);
		}
	}, 1000);
}
function ifPageReady(){
	driver.wait(function() {
		return driver.executeScript('return document.readyState').then(function(readyState) {
			return readyState === 'complete';
		});
	});
	setTimeout(function(){
		driver.getPageSource().then(function(str){
			if(str.indexOf('<a href="#" class="delBtn">删除</a>') == -1){
				driver.navigate().refresh().then(function(){
					setTimeout(ifPageReady, 1000);
				});
			}else{
				driver.executeScript('window.scrollTo(0,10000);').then(function(){
					setTimeout(function(){
						driver.executeScript('window.scrollTo(0,10000);').then(function(){
							setTimeout(saveNotes, 1000);
						});
					}, 1000);
				});
			}
		});
	}, 10000);
}

driver.get('http://t.qq.com/Furendo/mine?filter=0&date=20191231');
setTimeout(function(){
	driver.get('http://t.qq.com/' + process.argv[2] + '/mine?filter=' + process.argv[4] + '&date=' + process.argv[3]);	
	ifPageReady();
}, 60000);
