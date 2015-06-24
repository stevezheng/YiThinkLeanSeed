var AV = require('leanengine');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('thinkjs', function(request, response) {
  response.success('thinkjs');
});

module.exports = AV.Cloud;
