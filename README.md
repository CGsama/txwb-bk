# txwb-bk

安装node.js

npm install selenium-webdriver

复制对应版本chromedriver.exe到此目录下

运行node bk 你的id 日期 0:所有1:原创

比如node bk Furendo 20191231 1

运行后使用扫码登录，之后就会自动备份到txwb.bak文件

注意！！！刚刚才发现！以下两步骤请手动修改文件里的domain至这四个，运行四遍 【mblogpic.store.qq.com】【t1.qpic.cn】【t2.qpic.cn】【t3.qpic.cn】

完成后运行node mediahash来获取所有图片网址

bash ./getimg.sh 下载所有图片
