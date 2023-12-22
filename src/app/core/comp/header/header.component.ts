import { KeyValuePipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MENU_ITEMS } from '../../constants/menu-items';

@Component({
  selector: 'clt-header',
  standalone: true,
  imports: [RouterModule, NgFor, KeyValuePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	router  = inject(Router);
	@Input() activePath!: string | null;
	menuItems = MENU_ITEMS;

	goTo(path:string) {
		this.router.navigate([`./${path}`]);
	}
}
