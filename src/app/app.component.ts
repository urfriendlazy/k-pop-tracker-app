import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeaderComponent } from './common/components/global-header/global-header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GlobalHeaderComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'k-pop-tracker-app';
}
