/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"sap/training/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"sap/training/test/integration/pages/Worklist",
	"sap/training/test/integration/pages/Object",
	"sap/training/test/integration/pages/NotFound",
	"sap/training/test/integration/pages/Browser",
	"sap/training/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "sap.training.view."
	});

	sap.ui.require([
		"sap/training/test/integration/WorklistJourney",
		"sap/training/test/integration/ObjectJourney",
		"sap/training/test/integration/NavigationJourney",
		"sap/training/test/integration/NotFoundJourney",
		"sap/training/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});