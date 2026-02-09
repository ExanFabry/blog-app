import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { AboutPage } from './pages/about/about';
import { BlogPage } from './pages/blog/blog';

export const routes: Routes = [
    { path: '', component: LandingPage},
    { path: 'home', component: LandingPage},
    { path: 'about', component: AboutPage},
    { path: 'blog', component: BlogPage}
];
