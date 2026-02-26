import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { About } from './pages/about/about';
import { Blog } from './pages/blog/blog';
import { Posts } from './pages/posts/posts';

export const routes: Routes = [
    { path: '', component: LandingPage},
    { path: 'home', component: LandingPage},
    { path: 'about', component: About},
    { path: 'blog', component: Blog},
    { path: 'blog/:id', component: Posts }
];
