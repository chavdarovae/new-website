

import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CLT_ROUTES } from './app/app.routes';


bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule,
			RouterModule.forRoot(CLT_ROUTES, { anchorScrolling: 'enabled', scrollPositionRestoration: 'disabled', onSameUrlNavigation: 'reload', useHash: true })
		)
	]
}).catch(err => console.error(err));
