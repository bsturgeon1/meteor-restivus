Package.describe({
  name: 'bsturgeon1:restivus',
  summary: 'Create authenticated REST APIs in Meteor via HTTP/HTTPS. Setup CRUD endpoints for Collections.',
  version: '1.1.5',
  git: 'https://github.com/bsturgeon1/meteor-restivus'
});

Package.onUse(function (api) {
  api.versionsFrom('2.3');

  // Meteor dependencies
  api.use('ecmascript');
  api.use('check');
  api.use('underscore');
  api.use('webapp@2.0.3');
  api.use('accounts-password@3.0.3');
  api.use('simple:json-routes@3.0.0');
  api.use('http@3.0.0');
  api.use('alanning:roles@4.0.0', 'server', {weak: true});

  api.addFiles([
    'lib/auth.js',
    'lib/route.js',
    'lib/restivus.js'
  ], 'server');
  api.mainModule('index.js', 'server');
});

Package.onTest(function (api) {
  api.versionsFrom('2.3');
  // Meteor dependencies
  api.use('webapp@2.0.3');
  api.use('ecmascript');
  api.use('mongo@2.1.0');
  api.use('http@3.0.0');
  api.use('underscore');
  api.use('accounts-base@3.0.0');
  api.use('accounts-password@3.0.3');
  //api.use('practicalmeteor:munit');
  api.use('test-helpers@2.0.2');
  api.use('alanning:roles');

  api.addFiles([
      'test/api_tests.js',
      'test/authentication_tests.js',
      'test/route_unit_tests.js',
      'test/user_hook_tests.js'
  ], 'server');
});
