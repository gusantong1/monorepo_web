import { router } from '@web/router';
import { resetStaticRoutes } from '@web/utils';

import { createRouterGuard } from './guard';
import { routes } from './routes';

routes.forEach((route) => {
  router.addRoute(route);
});

const resetRoutes = () => resetStaticRoutes(router, routes);

// 创建路由守卫
createRouterGuard(router);

export { resetRoutes, router };
