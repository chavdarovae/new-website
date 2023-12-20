import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PreviewComponent } from 'src/app/core/comp/preview/preview.component';

@Component({
  selector: 'clt-third',
  standalone: true,
  imports: [NgClass, PreviewComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdComponent {
	@Input() isPreview!: boolean;
}
