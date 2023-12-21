import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

	title = {
		first: 'Die Idee',
		second: 'Die Entwicklung',
		third: 'Die Koordination',
		fourth: 'Das Betrieb',
		fifth: 'Das Team',
		datenschutz: 'Datenschutzerklärung',
		impressum: 'Impressum',
	}

	subtitle = {
		first: 'Subtitle ...',
		second: 'Subtitle ...',
		third: 'Subtitle ...',
		fourth: 'Subtitle ...',
		fifth: 'Subtitle ...',
		datenschutz: 'Subtitle ...',
		impressum: 'Subtitle ...',
	}
}
