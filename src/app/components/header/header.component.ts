import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Weather Application';

  @Output() scrollToHome = new EventEmitter<void>();

  // Method to trigger scroll to home section
  onNavigateToHome(): void {
    this.scrollToHome.emit();  // Emit the event
  }
}
