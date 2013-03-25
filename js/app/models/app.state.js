define(['backbone','backbone.localStorage'], function(Backbone){
	var appStateModel, appState;
	
	appStateModel = Backbone.Model.extend({
		defaults: {
			"curURI": "/",
			"loggedIn": false,
			"lastPageAccess": null
		},
		localStorage: new Backbone.LocalStorage("app.state"),
		initialize: function() {
			this.on('change', function(e){
				this.save();
			});
		}
	});

	appState = new appStateModel({id: 1});
	appState.fetch();
	return appState;
});