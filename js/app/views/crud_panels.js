define(['backbone.marionette', 'view/panel_student', 'hb!template/crud_panels.hb'],
function(Marionette, StudentPanelView, CrudPanelsTemplate){
	var panelsView = Backbone.Marionette.CompositeView.extend({
		itemView: StudentPanelView,

		appendHtml: function(collectionView, itemView, index){
		    collectionView.$("#crud_add_panel").before(itemView.el);
		},

		className: "crud_panels",

		template: CrudPanelsTemplate
	});

	return panelsView;
});
