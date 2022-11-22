import { lazy } from 'react';

const HomeRoutes = [
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('../../views/login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/dash',
    exact: true,
    component: lazy(() => import('../../views/dashboard/')),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
  {
    path: '/iniciar',
    exact: true,
    component: lazy(() => import('../../views/start/')),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
  {
    path: '/cadastro',
    exact: true,
    component: lazy(() => import('../../views/cadastro/')),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
  {
    path: '/listUsers',
    exact: true,
    component: lazy(() => import('../../views/usersList/')),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
  {
    path: '/reports/:stage',
    exact: true,
    component: lazy(() => import('../../views/reports/')),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
  {
    path: '/resumo',
    exact: true,
    component: lazy(() => import('../../views/resumo/')),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
];

export default HomeRoutes;
