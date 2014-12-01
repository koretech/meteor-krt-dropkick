var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:dropkick',
	summary: 'Dropkick Package',
	version: '2.0.1_2',
	git: 'https://github.com/koretech/meteor-krt-dropkick.git'
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@1.0');

	api.addFiles([
		'lib/dropkick/dropkick.js',
		'lib/dropkick/css/dropkick.css'
	], client);

});
