Firebase Email Update
This project contains a script that updates a user's email address in both Firebase Authentication and Firestore.

Table of Contents
Introduction

Prerequisites

Installation

Configuration

Usage

Script Details

Outcome

Contributing

License

Introduction
This script automates the process of updating a user's email address. It ensures that the change is reflected in both Firebase Authentication (for login purposes) and in the Firestore database (for data consistency).

Prerequisites
Before you begin, ensure you have:

Node.js installed

An active Firebase account and project

The Firebase Admin SDK Service Account credentials file

Installation
Clone this repository.

Navigate to the project directory in your terminal.

Install the required dependency:

bash
Copy
npm install firebase-admin
Configuration
1. Configure serviceAccountKey.json
Download your Firebase project's private key:

Go to the Firebase Console > Project Settings > Service Accounts

Click on "Generate new private key"

Save the downloaded JSON file as serviceAccountKey.json in the project directory

Alternatively, you can embed the credentials directly into your code as demonstrated in the sample script.

2. Configure Email Addresses
Edit the update-email.js script to set:

The old email (oldEmail)

The new email (newEmail)

Optionally, set emailVerified: true if you want to mark the email as verified immediately

Usage
Run the script with the following command:

bash
Copy
node update-email.js
Script Details
The update-email.js script performs the following operations:

Updates the user's email in Firebase Authentication – Ensuring the user can log in using the new email.

Updates the email in Firestore – Changes every document in the users collection that contains the old email to reflect the new email.

Outcome
After running the script:

The user can log in with the new email using the same password.

The old email becomes invalid for login.

The new email can be optionally set as verified.

All user-related data and documents remain intact.

Contributing
Contributions are welcome! Please follow these guidelines:

Fork the repository.

Create a new branch for your feature or bug fix.

Test your changes and ensure everything works correctly.

Submit a pull request describing your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
