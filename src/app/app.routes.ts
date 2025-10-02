import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/components/home/home').then((c) => c.Home),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../app/components/home/home').then((c) => c.Home),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../app/components/about/about').then((c) => c.About),
  },
  {
    path: 'service',
    loadComponent: () =>
      import('../app/components/service/service').then((c) => c.Service),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../app/components/contact/contact').then((c) => c.Contact),
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./components/gallery/gallery').then((c) => c.Gallery),
    children: [
      {
        path: 'product',
        loadComponent: () =>
          import('./components/product/product').then((c) => c.Product),
      },
      {
        path: 'fakestore',
        loadComponent: () =>
          import('./components/fakestore/fakestore').then((c) => c.Fakestore),
      },
      {
        path: 'movies',
        loadComponent: () =>
          import('./components/movie/movie').then((c) => c.Movie),
      },
      { path: '', redirectTo: 'product', pathMatch: 'full' },
    ],
  },
];
