var _LoadingHtml = '<div id="loading"><div class="cont"><div class="loadyuan"><span></span></div>加载中，请稍后</div></div>';
document.write(_LoadingHtml);
document.getElementById('loading').ontouchstart=function(event){
	event.preventDefault();
}
function completeLoading() {

	var loadingMask = document.getElementById('loading');
	loadingMask.parentNode.removeChild(loadingMask);


}
if (document.readyState == "complete") {
	completeLoading();
} else {
	document.onreadystatechange = function() {
		if (document.readyState == "complete") {
			completeLoading();
		}
	}
}