define(['backbone', 'app/config', 'backbone.tastypie', 'backbone.relational'],
function(Backbone, AppConfig){
	var teacherModel;

	teacherModel = Backbone.RelationalModel.extend({
		urlRoot: AppConfig.apiBaseUrl() + 'teacher'
	});

	return teacherModel;
});