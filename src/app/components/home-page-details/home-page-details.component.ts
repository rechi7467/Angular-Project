import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-page-details',
  imports: [ MatCardModule,MatIconModule],
  templateUrl: './home-page-details.component.html',
  styleUrl: './home-page-details.component.css'
})
export class HomePageDetailsComponent {
  message: string = 'Hello from Child Component!';

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
