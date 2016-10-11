"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var dashboard_component_1 = require('./pages/dashboard/dashboard.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map