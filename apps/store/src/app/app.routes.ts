import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',loadChildren:() => import('@my-apps/main').then(m => m.mainRoutes)
  },
];
