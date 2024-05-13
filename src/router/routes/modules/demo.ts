import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DEMO: AppRouteRecordRaw = {
  path: '/demo',
  name: 'demo',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.demo',
    requiresAuth: true,
    icon: 'icon-tool',
  },
  children: [
    {
      path: 'hello',
      name: 'hello',
      component: () => import('@/views/demo/hello/index.vue'),
      meta: {
        locale: 'menu.demo.hello',
        requiresAuth: true,
      },
    },
  ],
};

export default DEMO;
