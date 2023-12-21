import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ResolveEnd, Router, RouterOutlet } from '@angular/router';
import { Observable, filter, map, tap } from 'rxjs';
import { FooterComponent } from './core/comp/footer/footer.component';
import { HeaderComponent } from "./core/comp/header/header.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, FooterComponent, HeaderComponent, NgIf, AsyncPipe]
})
export class AppComponent {

	router = inject(Router);

	activePath$!: Observable<string>;

	ngOnInit(): void {
		this.activePath$ = this.router.events.pipe(
			filter(event => event instanceof ResolveEnd),
			map((event: any) => event.url.split('/').pop()),
			tap((res)=>console.log(res))
		);
	}
}

