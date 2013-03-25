define( ["backbone.marionette"],
function (Marionette, HCFLayout) {
    var App = new Marionette.Application();

    App.addRegions({
    	mainRegion: "#main"
    });

    return App;
});