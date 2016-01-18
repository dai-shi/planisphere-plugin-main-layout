/* global MainLayout, FlowRouter, BlazeLayout */

const templateStr = `
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1121231234" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">{{brand}}</a>
    </div>
    <div class="collapse navbar-collapse" id="navbar-collapse-1121231234">
      <ul class="nav navbar-nav">
        {{#each route in routes}}
          {{#if route.label}}
            <li class="{{isActivePath route.path}}">
              <a href="{{route.path}}">{{route.label}}</a>
            </li>
          {{/if}}
        {{/each}}
      </ul>
      {{#each extraNav in extraNavs}}
        {{> Template.dynamic template=extraNav.template}}
      {{/each}}
    </div>
  </div>
</nav>
{{> Template.dynamic template=page}}
`;

FlowRouter.wait();

function configRoutes(layoutName, routes) {
  routes = routes || [];
  routes.forEach((route) => {
    FlowRouter.route(route.path, {
      name: route.name,
      action() {
        BlazeLayout.render(layoutName, {
          page: route.page
        });
      }
    });
  });
  if (routes.length && !FlowRouter._initialized) FlowRouter.initialize();
}

MainLayout.config = function(config) {
  const layoutName = config.name || 'mainLayout';
  let t = Template[layoutName];
  if (!t) {
    t = Template[layoutName] = Template.fromString(templateStr);
    t.state = t.state || new ReactiveDict();
    t.helpers({
      brand() {
        return t.state.get('brand');
      },
      routes() {
        return t.state.get('routes');
      },
      extraNavs() {
        return t.state.get('extraNavs');
      }
    });
  }
  t.state.set('brand', config.brand);
  t.state.set('routes', config.routes);
  t.state.set('extraNavs', config.extraNavs);
  configRoutes(layoutName, config.routes);
};
