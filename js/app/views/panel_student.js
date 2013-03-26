define(['backbone.marionette', 'hb!template/panel_student.hb'],
function(Marionette, StudentPanelTemplate){
	var studentPanelView = Backbone.Marionette.ItemView.extend({
	  template: StudentPanelTemplate,
	  className: "panel"
	});

	return studentPanelView;
});
