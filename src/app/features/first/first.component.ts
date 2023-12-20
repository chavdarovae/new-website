import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PreviewComponent } from 'src/app/core/comp/preview/preview.component';

@Component({
	selector: 'clt-first',
	standalone: true,
	imports: [NgClass, PreviewComponent],
	templateUrl: './first.component.html',
	styleUrl: './first.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent {
	@Input() isPreview!: boolean;
}
