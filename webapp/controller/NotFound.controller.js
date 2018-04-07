sap.ui.define([
		"sap/training/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("sap.training.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);