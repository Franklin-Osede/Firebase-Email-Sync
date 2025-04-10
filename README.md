Firebase Email Update
This project contains a script that updates a user's email address in both Firebase Authentication and Firestore.

Introduction
This script is designed to facilitate the process of changing a user's email address. It performs the update in two key places:

Firebase Authentication: Updates the email used for user authentication.

Firestore: Updates the email in all documents of the users collection that contain the old email.

Prerequisites
Before you start, ensure you have:

Node.js installed

An active Firebase account and project

The Firebase Admin SDK Service Account credentials file

Usage Instructions
1. Install Dependencies
Run the following command to install the required dependency:

bash
Copy
npm install firebase-admin
2. Configure the serviceAccountKey.json File
Download your Firebase project's private key:

Go to the Firebase Console > Project Settings > Service Accounts

Click on "Generate new private key"

Save the downloaded JSON file as serviceAccountKey.json in your project directory

Alternatively, you may directly embed the credentials into your code as shown in the example script.

3. Configure the Email Addresses
Edit the update-email.js script to set:

The old email (oldEmail)

The new email (newEmail)

Optionally, set emailVerified: true if you want to bypass the verification process

4. Run the Script
Execute the script using the following command:

bash
Copy
node update-email.js
Script Details
The update-email.js script performs two major operations:

Updates the user's email in Firebase Authentication

Updates the user's email in all relevant documents in the users Firestore collection

Outcome
After running the script:

The user can log in with the new email while retaining the same password.

The old email will no longer be valid for login.

The new email can optionally be marked as verified.

All user-related data and documents remain intact.

