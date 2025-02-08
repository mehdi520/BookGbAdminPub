function getURL(url) {
	var devServer = '';
	if (window.location.href.indexOf("Web30V") > -1) {
		devServer = '/Web30V';
	}
	return !devServer || url.indexOf(devServer) >= 0 ? url : devServer + url;
}