import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PreviewComponent } from 'src/app/core/comp/preview/preview.component';

@Component({
  selector: 'clt-impressum',
  standalone: true,
  imports: [PreviewComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImpressumComponent {
	@Input() isPreview!: boolean;
}
