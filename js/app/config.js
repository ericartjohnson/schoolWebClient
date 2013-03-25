define(['app/utils'], function(){
	var config;

	config = function(){};
	config.prototype = {
		debug: true,
		apiVersion: 1,
		apiBaseUrlFormat: '/api/v{0}/',
		apiBaseUrl: function(){
			return this.apiBaseUrlFormat.format(this.apiVersion);
		},
		standardsServices: {
			commonCore: {
				baseUrl: '/commoncore/'
			}
		}
	}

	return new config;
});