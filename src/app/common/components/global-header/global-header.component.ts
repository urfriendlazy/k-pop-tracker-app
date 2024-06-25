import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [
    MatToolbarModule
  ],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.scss'
})
export class GlobalHeaderComponent {

}

