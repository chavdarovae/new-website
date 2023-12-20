import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PreviewComponent } from 'src/app/core/comp/preview/preview.component';

@Component({
  selector: 'clt-second',
  standalone: true,
  imports: [NgClass, PreviewComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent {
	@Input() isPreview!: boolean;
}
