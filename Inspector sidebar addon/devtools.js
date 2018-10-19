function onCreated(sidebarPane) {
	browser.devtools.panels.elements.onSelectionChanged.addListener(() => {
		var exp = "$0";
		sidebarPane.setExpression(exp);
	});

	sidebarPane.onShown.addListener(() => {
		console.log("~~~~Side Bar Shown~~~~");
	});

	sidebarPane.onHidden.addListener(() => {
		console.log("~~~~~Hidden~~~~~~");
	});
}

browser.devtools.panels.elements.createSidebarPane("Object Capture").then(onCreated);