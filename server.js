var AV = require('leanengine');
var path = require('path');

var APP_ID = process.env.LC_APP_ID;
var APP_KEY = process.env.LC_APP_KEY;
var MASTER_KEY = process.env.LC_APP_MASTER_KEY;

AV.initialize(APP_ID, APP_KEY, MASTER_KEY);

console.log(__dirname);
console.log(path.dirname(__dirname));
//定义APP的根目录
global.APP_PATH = __dirname + '/App';
//静态资源根目录
global.RESOURCE_PATH = __dirname + '/www';
//网站根目录
global.ROOT_PATH = __dirname + '/www';
//开启调试模式，线上环境需要关闭调试功能
global.APP_DEBUG = true;
//加载thinkjs启动服务
require('thinkjs');
