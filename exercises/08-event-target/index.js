window.onload = function loadFn() {
	let containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		let x = event.target;
		alert(x.tagName);
	});
};
