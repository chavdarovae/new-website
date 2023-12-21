import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PreviewComponent } from 'src/app/core/comp/preview/preview.component';

@Component({
  selector: 'clt-datenschutz',
  standalone: true,
  imports: [PreviewComponent],
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.scss', '../impressum/impressum.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatenschutzComponent {
	@Input() isPreview!: boolean;
}
