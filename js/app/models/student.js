define(['backbone', 'app/config', 'backbone.tastypie', 'backbone.relational'],
function(Backbone, AppConfig){
	var studentModel;

	studentModel = Backbone.RelationalModel.extend({
		urlRoot: AppConfig.apiBaseUrl() + 'student'
	});

	return studentModel;
});