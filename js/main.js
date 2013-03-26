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

requirejs(['jquery', 'app/app', 'view/layout_hcf', 'model/class', 'view/crud_panels'],
function($, App, HCFLayout, ClassModel, CrudPanelsView){
    // jquery on ready
	$(function(){
        var hcfView = new HCFLayout();
        App.mainRegion.show(hcfView);

        var firstClass = new ClassModel({id: 1});
        firstClass.fetch({
            success: function(){
                var panelsView = new CrudPanelsView({
                    collection: firstClass.get("students")
                });
                hcfView.content.show(panelsView);
            }
        });
	});
});
