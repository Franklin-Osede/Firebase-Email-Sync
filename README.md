##Firebase Email Update
This project contains a script that updates a user's email address in both Firebase Authentication and Firestore.

##Introduction
This script facilitates the process of updating a user's email address. It not only updates the email in Firebase Authentication but also finds and updates the corresponding email in all documents within the users collection in Firestore. This ensures that both the authentication data and the user data stored in Firestore remain consistent after the update.

##Prerequisites
Before running the script, make sure you have the following:

Node.js Installed: Ensure you have Node.js installed on your machine.

Firebase Account and Project: You must have a Firebase account and a configured project.

Firebase Admin SDK Service Account File: Download the Firebase Admin SDK service account key file.

##Setup and Usage Instructions
1. Install Dependencies
Install the required npm package using the following command:

bash
Copy
npm install firebase-admin
2. Configure the serviceAccountKey.json File
Obtain the private key file for your Firebase project:

Go to the Firebase Console > Project Settings > Service Accounts.

Click on "Generate New Private Key".

Save the downloaded JSON file as serviceAccountKey.json in your project directory.

Alternatively, you can embed the credentials directly into your code, similar to the example provided.

3. Configure the Email Addresses
Open the update-email.js script and set the following:

Old Email: The current email of the user (oldEmail).

New Email: The email you want to update to (newEmail).

(Optional) Set emailVerified: true if you want the new email to be marked as verified automatically, bypassing the need for further verification.

4. Run the Script
Execute the script using Node.js:

bash
Copy
node update-email.js
How the Script Works
The update-email.js script performs the following tasks:

Update in Firebase Authentication: It updates the user's email address in Firebase Authentication.

Update in Firestore: It searches the users collection for any documents containing the old email and updates them to the new email.

Expected Results
Once the script is executed:

The user will be able to log in with the new email using the same password.

The old email will no longer be valid for logging in.

The new email’s verification status can be preset (typically, it is set as verified).

All associated user documents and data in Firestore remain intact and consistent.
