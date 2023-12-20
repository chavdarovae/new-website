import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'clt-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent {

}
