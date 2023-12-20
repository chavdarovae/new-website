import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'clt-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdComponent {

}
