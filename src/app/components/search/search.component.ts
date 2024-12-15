import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false, // Indicates that this component is part of a larger module
  templateUrl: './search.component.html', // Path to the template HTML file
  styleUrls: ['./search.component.scss'] // Path to the styles (SCSS) file
})
export class SearchComponent {
  query: string = ''; // Query for searching cities, initialized as an empty string
  selectedDate: any = null; // Selected date for search, initialized as null

  // Event emitters to send the search data (city and date) to the parent component
  @Output() searchCity = new EventEmitter<string>();
  @Output() searchDate = new EventEmitter<string>();

  // Method to trigger the search when the user clicks the "Search" button
  onSearch(): void {
    // Check if the query is not empty and emit the searchCity event with the query
    if (this.query.trim()) {
      this.searchCity.emit(this.query.trim());
    }

    // If a date is selected, format it and emit the searchDate event
    if (this.selectedDate) {
      const date = this.selectedDate;
      
      // If the selected date is an object (Date type), format it
      if (typeof date === 'object' && date instanceof Date) {
        const formattedDate = this.formatDate(date);
        this.searchDate.emit(formattedDate);
      } 
      // If the selected date is already a string, format it
      else if (typeof date === 'string') {
        const formattedDate = this.formatDate(date);
        this.searchDate.emit(formattedDate);
      }
    }
  }

  // Method to format the date into 'YYYY-MM-DD' format
  formatDate(date: any): string {
    const d = new Date(date); // Create a Date object from the selected date
    const year = d.getFullYear(); // Get the year
    const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Get the month and pad it with a leading zero if necessary
    const day = d.getDate().toString().padStart(2, '0'); // Get the day and pad it with a leading zero if necessary
    return `${year}-${month}-${day}`; // Return the formatted date string
  }
}
