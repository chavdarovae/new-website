import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'clt-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent {

}
