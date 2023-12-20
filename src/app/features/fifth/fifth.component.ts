import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'clt-fifth',
  standalone: true,
  imports: [NgClass],
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FifthComponent {
	@Input() isPreview!: boolean;
}
