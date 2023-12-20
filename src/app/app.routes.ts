import { Routes } from '@angular/router';
import { NavComponent } from './core/comp/nav/nav.component';

export const CLT_ROUTES: Routes = [
	{
		path:'',
		component: NavComponent
	},
	{
		path:'first',
		loadComponent: () => import('./features/first/first.component').then(c => c.FirstComponent)
	},
	{
		path:'second',
		loadComponent: () => import('./features/second/second.component').then(c => c.SecondComponent)
	},
	{
		path:'third',
		loadComponent: () => import('./features/third/third.component').then(c => c.ThirdComponent)
	},
	{
		path:'fourth',
		loadComponent: () => import('./features/fourth/fourth.component').then(c => c.FourthComponent)
	},
	{
		path:'fifth',
		loadComponent: () => import('./features/fifth/fifth.component').then(c => c.FifthComponent)
	},
	{
		path:'impressum',
		loadComponent: () => import('./features/impressum/impressum.component').then(c => c.ImpressumComponent)
	},
	{
		path:'datenschutz',
		loadComponent: () => import('./features/datenschutz/datenschutz.component').then(c => c.DatenschutzComponent)
	}
];

