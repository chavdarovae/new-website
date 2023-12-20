import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'clt-fourth',
  standalone: true,
  imports: [NgClass],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourthComponent {
	@Input() isPreview!: boolean;
}
