import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'clt-third',
  standalone: true,
  imports: [NgClass],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdComponent {
	@Input() isPreview!: boolean;
}
