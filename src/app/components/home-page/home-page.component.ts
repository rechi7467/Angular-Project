import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home-page',
  imports: [ CommonModule, HighlightDirective , MatIconModule, MatCardModule ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  // @ViewChild(HomePageDetailsComponent) childComponent!: HomePageDetailsComponent; 

  // changeChildMessage() {
  //   this.childComponent.changeMessage('Message changed from Parent Component!'); 
  // }

  
  today: number = Date.now(); 

}
