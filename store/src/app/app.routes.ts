import { Routes } from '@angular/router';
import { CineComponent } from '@shared/components/cine/cine.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./domains/products/pages/list/list.component')
            },
            {
                path: 'about',
                loadComponent: () => import('./domains/info/pages/about/about.component')
            },
            {
                path: 'product/:id',
                loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component')
            }
        ]
    },
    {
        path: 'ca',
        loadComponent: () => import('./domains/shared/carousel/carousel.component')
    },
    {
        path: 'cine',
        component: CineComponent
    },
    {
        path: '**',
        loadComponent: () => import('./domains/info/pages/not-found/not-found.component')
    }
];
