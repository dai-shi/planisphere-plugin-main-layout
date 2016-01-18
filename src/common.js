/* global MainLayout:true, SimpleSchema */

MainLayout = MainLayout || {};
MainLayout.config = function() {};

if (Package['daishi:planisphere-core']) {
  const Planisphere = Package['daishi:planisphere-core'].Planisphere;
  Planisphere.registerPlugin({
    name: 'main-layout',
    description: 'provides main layout using Blaze, FlowRouter and Bootstrap3',
    configMethod: 'MainLayout.config',
    configSchema: new SimpleSchema({
      brand: {
        type: String
      },
      routes: {
        optional: true,
        type: [new SimpleSchema({
          name: {
            type: String
          },
          path: {
            type: String
          },
          label: {
            optional: true,
            type: String
          },
          page: {
            type: String
          }
        })]
      },
      extraNavs: {
        optional: true,
        minCount: 0,
        maxCount: 1,
        autoform: {
          initialCount: 0
        },
        type: [new SimpleSchema({
          template: {
            type: String
          }
        })]
      },
      name: {
        optional: true,
        type: String,
        autoform: {
          placeholder: 'Enter template name if you want to change'
        }
      }
    })
  });
}
