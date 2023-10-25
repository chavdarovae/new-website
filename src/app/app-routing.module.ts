import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './core/nav/nav.component';

const routes: Routes = [
	{
		path:'',
		component: NavComponent
	}
];

export const AppRoutingModule = RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'disabled', onSameUrlNavigation: 'reload' });
