define(['backbone', 'app/config', 'model/student', 'collection/students', 'model/teacher', 'backbone.tastypie', 'backbone.relational'],
function(Backbone, AppConfig, Student, Students, Teacher){
	var classModel;

	classModel = Backbone.RelationalModel.extend({
		urlRoot: AppConfig.apiBaseUrl() + 'class',
		relations: [
			{
				type: Backbone.HasMany,
				key: 'students',
				relatedModel: Student,
				collectionType: Students,
				reverseRelation: {
					key: 'class',
					includeInJSON: 'id'
				}
			},
			{
				type: Backbone.HasOne,
				key: 'teacher',
				relatedModel: Teacher,
				reverseRelation: {
					key: 'class',
					includeInJSON: 'id'
				}
			}
		]
	});

	return classModel;
});