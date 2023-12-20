import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'clt-second',
  standalone: true,
  imports: [NgClass],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent {
	@Input() isPreview!: boolean;
}
