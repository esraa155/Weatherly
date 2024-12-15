import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:false,

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather Application';

  // Method to scroll to the SearchComponent
  navigateToHome(): void {
    const element = document.getElementById('home-component');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',  
        block: 'start',      // Scrolls to the top of the element
      });
    }
  }
}
