Package.describe({
  name: 'daishi:planisphere-plugin-main-layout',
  version: '0.0.1',
  summary: 'Main layout plugin for Planisphere (FlowRouter, Bootstrap3 navbar)',
  git: 'https://github.com/dai-shi/planisphere-plugin-main-layout',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'templating', 'reactive-dict']);
  api.use('aldeed:simple-schema@1.1.0');
  api.use('twbs:bootstrap@3.3.6');
  api.use('kadira:flow-router@2.10.0');
  api.use('kadira:blaze-layout@2.3.0');
  api.use('zimme:active-route@2.3.2');
  api.use('numtel:template-from-string@0.1.0');
  api.use('daishi:planisphere-core@0.1.0');
  api.addFiles(['src/common.js']);
  api.addFiles(['src/client.js'], 'client');
  api.export('MainLayout');
});

Package.onTest(function(api) {
  api.use(['ecmascript', 'templating', 'reactive-dict']);
  api.use('tinytest');
  api.use('daishi:planisphere-plugin-main-layout');
  api.addFiles(['tests/common-tests.js']);
});
