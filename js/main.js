requirejs.config({
    baseUrl: STATIC_URL+'js/lib',
    paths: {
        app: '../app',
        model: '../app/models',
        view: '../app/views',
        collection: '../app/collections',
        template: '../app/templates',
        jquery: 'jquery-1.9.1.min',
        underscore: 'underscore-min',
        backbone: 'backbone-1.0-min',
        'backbone.relational': 'backbone.relational-0.8.0+',
        // backbone: 'backbone-0.9.10-min',
        // 'backbone.relational': 'backbone.relational-0.8.0',
        'backbone.localStorage': 'backbone.localStorage-min',
        'backbone.marionette': 'backbone.marionette',
        hb: 'require.hbtemplates',
        text: 'require.text'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        'backbone.relational': ['backbone'],
        'backbone.localStorage': ['backbone'],
        'backbone.tastypie': ['backbone'],
        'backbone.marionette': {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

requirejs(['jquery', 'app/app', 'backbone.marionette', 'hb!template/layout_hcf.hb'],
function($, App, Marionette, HCFLayout){
    // jquery on ready
	$(function(){

        var hcfLayout = Marionette.Layout.extend({
            template: HCFLayout,
            regions: {
                header: "#header",
                content: "#content",
                footer: "#footer"
            },
            className: "hcfLayout"
        });

        var hcf = new hcfLayout();
        App.mainRegion.show(hcf);
	});
});
