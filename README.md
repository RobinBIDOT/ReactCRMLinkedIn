# CRM Project

This project is a simple CRM (Customer Relationship Management) application built with React and Firebase.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
    ```
2. Navigate to the project directory:
    ```bash
   cd your-repo
    ```
   
3. Install the dependencies:
    ```bash
   npm install
    ```
4. Create a .env file in the root of the project and add your Firebase configuration:
    ```bash
   REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
    ```
5. Start the development server:
    ```bash
   npm start
    ```
   
### Features

- Add new contacts
- Display contacts in a grid
- Delete contacts
- Real-time updates with Firebase