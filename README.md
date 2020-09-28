# txwb-bk

安装node.js

npm install selenium-webdriver

复制对应版本chromedriver.exe到此目录下

运行node bk 你的id 日期 0:所有1:原创

比如node bk Furendo 20191231 1 《-----推荐！最后6小时没时间了，把furendo换成你的id就好

运行后一分钟内使用扫码登录，之后就会自动备份到txwb.bak文件

完成后运行node mediahash来获取所有图片网址

下载所有图片:
bash run.sh mblogpic.store.qq.com media.store.hash
bash run.sh t0.qpic.cn media.t0.hash
bash run.sh t1.qpic.cn media.t1.hash
bash run.sh t2.qpic.cn media.t2.hash
