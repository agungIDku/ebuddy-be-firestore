import admin from "firebase-admin";

const serviceAccount = require("./firebaseConfig.json"); // i can't provide my creds, please use your own

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-project-id>.firebaseio.com", // use your own
});

export const firestore = admin.firestore();
