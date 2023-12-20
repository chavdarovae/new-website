import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstComponent } from "../../../features/first/first.component";
import { SecondComponent } from "../../../features/second/second.component";
import { ThirdComponent } from "../../../features/third/third.component";
import { FourthComponent } from "../../../features/fourth/fourth.component";
import { FifthComponent } from "../../../features/fifth/fifth.component";

@Component({
    selector: 'clt-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: true,
    imports: [
        RouterModule,
        FirstComponent,
        SecondComponent,
        ThirdComponent,
        FourthComponent,
        FifthComponent
    ]
})
export class NavComponent {

}
