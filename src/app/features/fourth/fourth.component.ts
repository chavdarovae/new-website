import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PreviewComponent } from 'src/app/core/comp/preview/preview.component';

@Component({
  selector: 'clt-fourth',
  standalone: true,
  imports: [NgClass, PreviewComponent],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourthComponent {
	@Input() isPreview!: boolean;
}
