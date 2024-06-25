import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [
    MatToolbarModule, MatTabsModule
  ],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.scss'
})
export class GlobalHeaderComponent {

}

