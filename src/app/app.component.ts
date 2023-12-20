import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/comp/footer/footer.component';
import { HeaderComponent } from "./core/comp/header/header.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, FooterComponent, HeaderComponent]
})
export class AppComponent {
  title = 'colletoWebSite';
}
