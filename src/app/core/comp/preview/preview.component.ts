import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SUBTITLE, TITLE } from '../../constants/menu-items';

@Component({
  selector: 'clt-preview',
  standalone: true,
  imports: [NgClass],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent {
	@Input() navOrder: 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'datenschutz' | 'impressum' = 'first';
	@Input() isPreview = false;

	title = TITLE;
	subtitle = SUBTITLE;
}
