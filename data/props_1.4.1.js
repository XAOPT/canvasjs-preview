var data = {
	"options": [
		{
			name: "interactivityEnabled",
			value: true,
			type: "boolean"
		},
		{
			name: "animationEnabled",
			value: true,
			type: "boolean"
		},
		{
			name: "zoomEnabled",
			value: true,
			type: "boolean"
		},
		{
			name: "theme",
			value: "theme1",
			type: "select",
			options: ["theme1","theme2","theme3"]
		},
		{
			name: "backgroundColor",
			value: "white",
			type: "string"
		},
		/*{
			name: "colorSet",
			value: "colorset1",
			type: "string"
		},
		{
			name: "culture",
			value: "en",
			type: "string"
		},*/
		{
			name: "width",
			value: null,
			type: "number"
		},
		{
			name: "height",
			value: null,
			type: "number"
		}
	],

	"data": [
		{
			name: "type",
			value: "spline",
			type: "select",
			options: ["area", "bar", "bubble", "column", "doughnut", "line", "pie", "spline", /*"splineArea",*/ "scatter", /*"stackedArea", "stackedArea100", "stackedBar", "stackedBar100", "stackedColumn", "stackedColumn100",*/ "stepLine"/*, "stepArea"*/]
		},
		{
			name: "lineThickness",
			value: 2,
			type: "number"
		},
		{
			name: "markerType",
			value: "circle",
			type: "select",
			options: ["none", "circle", "square", "triangle", "cross"]
		},
		{
			name: "markerColor",
			value: null,
			type: "string"
		},
		{
			name: "markerSize",
			value: 7,
			type: "number"
		},
		{
			name: "markerBorderThickness",
			value: 1,
			type: "number"
		},
		{
			name: "markerBorderColor",
			value: null,
			type: "string"
		},
		{
			name: "color",
			value: null,
			type: "string"
		},
		{
			name: "showInLegend",
			value: true,
			type: "boolean"
		},
		{
			name: "legendText",
			value: null,
			type: "string"
		},
		{
			name: "toolTipContent",
			value: null,
			type: "string"
		}
	],

	"title": [
		{
			name: "text",
			value: "title",
			type: "string"
		},
		{
			name: "verticalAlign",
			value: "top",
			type: "select",
			options: ["top", "center", "bottom"]
		},
		{
			name: "horizontalAlign",
			value: "center",
			type: "select",
			options: ["left", "center", "right"]
		},
		{
			name: "fontSize",
			value: "30",
			type: "number"
		},
		{
			name: "fontFamily",
			value: "Calibri, Optima, Candara",
			type: "string"
		},
		{
			name: "fontWeight",
			value: "bold",
			type: "select",
			options: ["lighter", "normal", "bold", "bolder"]
		},
		{
			name: "fontColor",
			value: "#3A3A3A",
			type: "string"
		},
		{
			name: "fontStyle",
			value: "normal",
			type: "select",
			options: ["normal", "italic", "oblique"]
		},
		{
			name: "borderThickness",
			value: 0,
			type: "number"
		},
		{
			name: "cornerRadius",
			value: 0,
			type: "number"
		},
		{
			name: "borderColor",
			value: "black",
			type: "string"
		},
		{
			name: "backgroundColor",
			value: "#FFF",
			type: "string"
		},
		{
			name: "margin",
			value: 10,
			type: "number"
		},
		{
			name: "padding",
			value: 0,
			type: "number"
		},
	],
	"legend": [
		{
			name: "fontSize",
			value: "30",
			type: "number"
		},
		{
			name: "fontFamily",
			value: "Calibri, Optima, Candara",
			type: "string"
		},
		{
			name: "fontWeight",
			value: "bold",
			type: "select",
			options: ["lighter", "normal", "bold", "bolder"]
		},
		{
			name: "fontColor",
			value: "#3A3A3A",
			type: "string"
		},
		{
			name: "fontStyle",
			value: "normal",
			type: "select",
			options: ["normal", "italic", "oblique"]
		},
		{
			name: "verticalAlign",
			value: "bottom",
			type: "select",
			options: ["top", "center", "bottom"]
		},
		{
			name: "horizontalAlign",
			value: "center",
			type: "select",
			options: ["left", "center", "right"]
		}
	],
	"axisX": [
		{
			name: "title",
			value: null,
			type: "string"
		},
		{
			name: "titleFontSize",
			value: "10",
			type: "number"
		},
		{
			name: "titleFontFamily",
			value: "Calibri, Optima, Candara",
			type: "string"
		},
		{
			name: "titleFontWeight",
			value: "bold",
			type: "select",
			options: ["lighter", "normal", "bold", "bolder"]
		},
		{
			name: "titleFontColor",
			value: "#3A3A3A",
			type: "string"
		},
		{
			name: "titleFontStyle",
			value: "normal",
			type: "select",
			options: ["normal", "italic", "oblique"]
		},
		{
			name: "margin",
			value: 10,
			type: "number"
		},
		{
			name: "labelAngle",
			value: 0,
			type: "number"
		},
		{
			name: "labelFontFamily",
			value: "Calibri, Optima, Candara",
			type: "string"
		},
		{
			name: "labelFontColor",
			value: "#3A3A3A",
			type: "string"
		},
		{
			name: "labelFontSize",
			value: "10",
			type: "number"
		},
		{
			name: "labelFontWeight",
			value: "bold",
			type: "select",
			options: ["lighter", "normal", "bold", "bolder"]
		},
		{
			name: "labelFontStyle",
			value: "normal",
			type: "select",
			options: ["normal", "italic", "oblique"]
		},
		{
			name: "prefix",
			value: null,
			type: "string"
		},
		{
			name: "suffix",
			value: null,
			type: "string"
		},
		{
			name: "valueFormatString",
			value: null,
			type: "string"
		},
		{
			name: "minimum",
			value: null,
			type: "number"
		},
		{
			name: "maximum",
			value: null,
			type: "number"
		},
		{
			name: "interval",
			value: null,
			type: "number"
		},
		{
			name: "intervalType",
			value: null,
			type: "select",
			options: ["null", "number","millisecond" ,"second"," minute", "hour", "day", "month" ,"year" ]
		},
		{
			name: "tickLength",
			value: 5,
			type: "number"
		},
		{
			name: "tickColor",
			value: "#BBBBBB",
			type: "string"
		},
		{
			name: "tickThickness",
			value: 2,
			type: "number"
		},
		{
			name: "lineColor",
			value: "#BBBBBB",
			type: "string"
		},
		{
			name: "lineThickness",
			value: 2,
			type: "number"
		},
		{
			name: "interlacedColor",
			value: null,
			type: "string"
		},
		{
			name: "gridColor",
			value: "#BBBBBB",
			type: "string"
		},
		{
			name: "gridThickness",
			value: 1,
			type: "number"
		}
	],
	"axisY": [
		{
			name: "title",
			value: null,
			type: "string"
		},
		{
			name: "titleFontSize",
			value: "10",
			type: "number"
		},
		{
			name: "titleFontFamily",
			value: "Calibri, Optima, Candara",
			type: "string"
		},
		{
			name: "titleFontWeight",
			value: "bold",
			type: "select",
			options: ["lighter", "normal", "bold", "bolder"]
		},
		{
			name: "titleFontColor",
			value: "#3A3A3A",
			type: "string"
		},
		{
			name: "titleFontStyle",
			value: "normal",
			type: "select",
			options: ["normal", "italic", "oblique"]
		},
		{
			name: "margin",
			value: 10,
			type: "number"
		},
		{
			name: "labelAngle",
			value: 0,
			type: "number"
		},
		{
			name: "labelFontFamily",
			value: "Calibri, Optima, Candara",
			type: "string"
		},
		{
			name: "labelFontColor",
			value: "#3A3A3A",
			type: "string"
		},
		{
			name: "labelFontSize",
			value: "10",
			type: "number"
		},
		{
			name: "labelFontWeight",
			value: "bold",
			type: "select",
			options: ["lighter", "normal", "bold", "bolder"]
		},
		{
			name: "labelFontStyle",
			value: "normal",
			type: "select",
			options: ["normal", "italic", "oblique"]
		},
		{
			name: "prefix",
			value: null,
			type: "string"
		},
		{
			name: "suffix",
			value: null,
			type: "string"
		},
		{
			name: "valueFormatString",
			value: null,
			type: "string"
		},
		{
			name: "minimum",
			value: null,
			type: "number"
		},
		{
			name: "maximum",
			value: null,
			type: "number"
		},
		{
			name: "interval",
			value: null,
			type: "number"
		},
		{
			name: "intervalType",
			value: null,
			type: "select",
			options: ["null", "number","millisecond" ,"second"," minute", "hour", "day", "month" ,"year" ]
		},
		{
			name: "tickLength",
			value: 5,
			type: "number"
		},
		{
			name: "tickColor",
			value: "#BBBBBB",
			type: "string"
		},
		{
			name: "tickThickness",
			value: 2,
			type: "number"
		},
		{
			name: "lineColor",
			value: "#BBBBBB",
			type: "string"
		},
		{
			name: "lineThickness",
			value: 2,
			type: "number"
		},
		{
			name: "interlacedColor",
			value: null,
			type: "string"
		},
		{
			name: "gridColor",
			value: "#BBBBBB",
			type: "string"
		},
		{
			name: "gridThickness",
			value: 1,
			type: "number"
		},
		{
			name: "includeZero",
			value: true,
			type: "boolean"
		}
	],
	"toolTip": [
		{
			name: "enabled",
			value: true,
			type: "boolean"
		},
		{
			name: "shared",
			value: true,
			type: "boolean"
		},
		{
			name: "content",
			value: "x: {x}, y: {y}",
			type: "string"
		},
		{
			name: "animationEnabled",
			value: true,
			type: "boolean"
		},
		{
			name: "borderColor",
			value: null,
			type: "string"
		}
	]
}