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
    path: '/activ-history',
    exact: true,
    component: lazy(() => import('../../views/activ-history')),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
  {
    path: '/activ-history/grades-labirinto-history',
    exact: true,
    component: lazy(() =>
      import('../../views/activ-history/grades/gradesLabirintoHistory')
    ),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
  {
    path: '/activ-history/grades-ponte-history',
    exact: true,
    component: lazy(() =>
      import('../../views/activ-history/grades/gradesPonteHistory')
    ),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
  {
    path: '/activ-history/video',
    exact: true,
    component: lazy(() =>
      import('../../views/activ-history/videos/videoHistory')
    ),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
  {
    path: '/activ-math',
    exact: true,
    component: lazy(() => import('../../views/activ-math/')),
    meta: {
      action: 'defaultUser',
      resource: 'all',
    },
  },
];

export default HomeRoutes;
