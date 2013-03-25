define(['backbone', 'model/student', 'backbone.tastypie', 'backbone.relational'],
function(Backbone, Student){
	var studentCollection;

	studentCollection = Backbone.Collection.extend({
		model: Student
	});

	return studentCollection;
});
