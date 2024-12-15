Weatherly

Description

Weatherly is a dynamic Angular application that provides accurate and up-to-date weather forecasts for users based on their selected locations. The project integrates multiple APIs to deliver a seamless user experience and utilizes advanced Angular features like NgRx for state management, lazy loading, and more for enhanced performance and maintainability.

Installation Steps

Requirements

Node.js (version >=22.12.0)

Angular CLI (version >= 19.0.0)

npm (version >= 10.9.0)

Angular Material

To install Angular Material, run the following command after setting up the project:


npm install @angular/material @angular/cdk @angular/animations
ng add @angular/material

Steps

Clone the project repository:

git clone <repository_url>
cd Weatherly

Install the required dependencies:

npm install

Start the development server:

ng serve

Access the application in your browser at http://localhost:4200.

Functionalities

Major Features

Real-time Weather Forecasts: Fetch weather data for selected cities using OpenWeatherMap API.

Search Functionality: Allows users to search and add new cities to their favorite locations.

State Management (NgRx): Manages user-selected locations and weather data to ensure a predictable and efficient data flow.

Responsive Design: Designed to provide an optimal viewing experience across all device types (mobile, tablet, desktop).

Lazy Loading Modules: Improves application performance by only loading necessary modules when required.

Error Handling: Provides user-friendly messages for API errors or connectivity issues.

Why NgRx?

We used NgRx for its structured approach to state management, especially as the application handles data updates and interactions from multiple sources like APIs and user inputs.

Benefits of NgRx:

Predictable State: A centralized state allows easy debugging and consistency.

Efficient Data Flow: Reduces redundant API calls by caching data in the store.

Scalability: Ideal for managing large, complex applications with multiple user interactions.

Enhanced Testability: Clear separation of concerns between actions, reducers, and effects.

For smaller projects, simpler solutions like services or BehaviorSubjects may suffice. However, Weatherly’s architecture benefits greatly from NgRx as it grows.

Project Structure

src/
├── app/
│   ├── components/       # Reusable UI components
│   ├── services/         # API and business logic
│   ├── state/            # NgRx state management (actions, reducers, effects)
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── effects/
│   ├── modules/          # Lazy-loaded modules
│   └── app.module.ts     # Application root module
├── assets/               # Static assets (icons, images, etc.)
├── environments/         # Environment-specific configurations

APIs Used

OpenWeatherMap API: Provides current weather data and forecasts.

How to Use

Launch the application as described above.

Search for a location using the search bar.

View the current weather and forecasts for the selected city.


Libraries & Tools Used

## Libraries Used

Below is a list of libraries used in this project, along with an explanation of why they were included:

1. *@ngrx/store*
   - *Why*: Used for state management to ensure a predictable state container and facilitate communication between components.
   - *Where*: Manages the global application state, including user authentication and data caching.

2. *@ngrx/effects*
   - *Why*: Handles side effects in the application, such as asynchronous data fetching.
   - *Where*: Used for managing API calls and syncing data with the backend.

3. *RxJS*
   - *Why*: Provides reactive programming capabilities like Observables to handle asynchronous data streams.
   - *Where*: Utilized throughout the app for event handling, API calls, and real-time updates.

4. *Angular Material*
   - *Why*: For pre-built, customizable UI components to ensure a consistent and responsive design.
   - *Where*: Used for buttons, dialogs, tables, and other UI elements.

5. *ngx-translate*
   - *Why*: Supports multi-language capabilities for internationalization.
   - *Where*: Used to manage translations across the application.

6. *lodash*
   - *Why*: Provides utility functions for common programming tasks like array manipulation and object cloning.
   - *Where*: Used in data processing and formatting tasks.

7. *Chart.js*
   - *Why*: A flexible and simple charting library for visualizing data.
   - *Where*: Used to display analytics and reports.

8. *Jest*
   - *Why*: A testing framework for running unit tests.
   - *Where*: Used to ensure code reliability and prevent regressions.

9. *Prettier*
   - *Why*: Enforces a consistent code style.
   - *Where*: Used as a pre-commit hook to auto-format code.


Authors

Developed by Esraa.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

