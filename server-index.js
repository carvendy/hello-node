var server = require("./server");
var router = require("./router");//无加载时序问题
 
server.start(router.route);