/**运行时的配置 */

import { defineApp,matchRoutes } from 'umi';

export default defineApp({
  onRouteChange(props) {
    let { location, clientRoutes,routes,action } = props
    const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
    console.log('route: ', route);
    if (route) {
      document.title = route.title || '';
    }

  },
});
