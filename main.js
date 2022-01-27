function main() {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let url = tabs[0].url;
		// use `url` here inside the callback because it's asynchronous!
		alert(url);
	});
	//alert("Hello");
}

document.getElementById("alertButton").onclick = function() {
	showAlert();
};