require.config({
	baseUrl: 'scripts',
	paths: {
		'esri': 'https://js.arcgis.com/4.0/esri',
		'dojo': 'https://js.arcgis.com/4.0/dojo',
		'dojox': 'https://js.arcgis.com/4.0/dojox',
		'dijit': 'https://js.arcgis.com/4.0/dijit',
		'moment': 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0' // To resolve Script error for "moment/moment", needed by: esri/plugins/moment
	}
});

// 4.0 API reference:
// http://arcgis.api.luyutao.com/arcgis_js_v40_sdk/arcgis_js_api/sdk/api-reference/index.html

require([
	'esri/Map',
	'esri/views/MapView',
	'esri/Graphic',
	'esri/geometry/Point',
	'esri/symbols/SimpleMarkerSymbol',
	'dojo/domReady!'
],
	function (Map, MapView, Graphic, Point, SimpleMarkerSymbol) {
		'use strict';

		document.getElementById('viewDiv').innerText = '';

		var map = new Map({
			basemap: "hybrid"
		});

		var view = new MapView({
			center: [-80, 35],
			container: "viewDiv",
			map: map,
			zoom: 3
		});

		var markerSymbol = new SimpleMarkerSymbol({
			color: "red",
			outline: {
				color: [128, 128, 128, 0.5],
				width: "0.5px"
			}
		});

		view.graphics.add(new Graphic(
			// this is the location of the Titanic
			new Point(-49.97, 41.73, map.spatialReference),
			markerSymbol
		));

	});
