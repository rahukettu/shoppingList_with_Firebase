# shoppingList_with_Firebase
Simple React Native Expo Shopping List App using Google Firebase db  

A simple shopping list application built with React Native and Firebase, allowing users to create, view, and manage their shopping lists in real time. 
This project leverages the power of Firestore for data storage and retrieval.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Steps to Ensure Sync and Usability](#steps-to-ensure-sync-and-usability)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Features

- **Add Items**: Users can add items to their shopping list.
- **Remove Items**: Users can remove items from their list.
- **Real-time Updates**: Changes are updated in real-time across all devices using Firebase Firestore.
- **User Authentication**: (Optional) Add user authentication to personalize shopping lists for each user. In this project I do not have it placed.

## Technologies Used

- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/)
  - Firestore
  - Firebase Authentication (optional)
- [Expo](https://expo.dev/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Getting Started

To get a local copy of the project up and running, follow these simple steps:

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Expo CLI (You can install it globally via npm: `npm install -g expo-cli`)
- Firebase account and a project set up in the Firebase console.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahukettu/shoppingList_with_Firebase.git
   cd shoppingList_with_Firebase
`
    Install dependencies:

```bash
npm install
```
Configure Firebase:

    Create a file named firebaseConfig.js in the root of the project and set up your Firebase configuration.
    Example:
  ```
javascript

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```
Run the application:

bash

    expo start

    Open the app:
        Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal or browser.

Usage

    Add items to your shopping list by entering the item name and pressing the "Add" button.
    Remove items by clicking the delete icon next to each item.
    The shopping list will update in real-time thanks to Firestore.

Steps to Ensure Sync and Usability

    Expo CLI and App:
        Make sure you are signed in to your Expo CLI on your development machine using the same account as the Expo Go app on your mobile device. This helps ensure smooth syncing and testing.

    Firebase Authentication:
        Confirm that your Firebase configuration (firebaseConfig.js) is correctly set up and that your Firebase project settings match the environment (e.g., development or production).

    Testing Firebase in React Native:
        If you experience connection issues in the React Native app, double-check that both Expo and Firebase are set up to handle your app’s real-time requirements.

Why This Matters

Aligning these credentials and environments ensures that:

    Your real-time database updates from Firebase are accessible on your device.
    User authentication and authorization are correctly handled without unexpected permission errors.
    Debugging and logging data issues become simpler since both environments are in sync.

License

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

Contributing

Contributions are welcome! Please feel free to submit a Pull Request or create an issue for any bugs or enhancements.

    Fork the Project
    Create your Feature Branch (git checkout -b feature/AmazingFeature)
    Commit your Changes (git commit -m 'Add some AmazingFeature')
    Push to the Branch (git push origin feature/AmazingFeature)
    Open a Pull Request

Acknowledgements

    Firebase Documentation
    React Native Documentation
    Expo Documentation
    All the amazing and brilliant open source apps around the GitHub

Contact

For questions or suggestions, please contact:

    rahukettu@gmx.com
    GitHub: @rahukettu 
    
  
    
    
