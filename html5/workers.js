// 不能在本地使用；
// 一般用来计算大量的数据；
var i=0;
function timedCount(){
	i += 1;
	postMessage(i);
	setTimeout(arguments.callee, 500);
}
timedCount();