define(['handlebars'],
function (Handlebars) {

    var loadResource = function (resourceName, parentRequire, callback, config) {
        parentRequire([("text!" + resourceName)],
            function (templateContent) {
                var template = Handlebars.compile(templateContent);
                Handlebars.registerPartial(resourceName.replace('.hb','').replace('template/',''), template);
                callback(template);
            }
        );
    };

    return {
        load: loadResource
    };

});