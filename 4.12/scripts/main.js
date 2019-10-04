require.config({
	baseUrl: 'scripts',
	paths: {
		'esri': 'https://js.arcgis.com/4.12/esri',
		'dojo': 'https://js.arcgis.com/4.12/dojo',
		'dojox': 'https://js.arcgis.com/4.12/dojox',
		'dijit': 'https://js.arcgis.com/4.12/dijit'
	}
});

require([
	'esri/Map',
	'esri/views/MapView'
],
	function (map, mapView) {
		'use strict';
		if (map !== undefined && mapView !== undefined && map !== null && mapView !== null) {
			window.document.getElementById('viewDiv').innerText = 'Seems arcgis js api was loaded OK.';
		}
	});
