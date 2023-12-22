import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'clt-footer',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
	@Input() activePath!: string | null;
	logoPath = isDevMode() ? '../../../../assets/img/logo-white.png' : './assets/img/logo-white.png';
}
