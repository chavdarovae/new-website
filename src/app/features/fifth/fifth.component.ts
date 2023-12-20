import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PreviewComponent } from 'src/app/core/comp/preview/preview.component';

@Component({
  selector: 'clt-fifth',
  standalone: true,
  imports: [NgClass, PreviewComponent],
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FifthComponent {
	@Input() isPreview!: boolean;
}
