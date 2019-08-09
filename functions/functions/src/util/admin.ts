import * as admin from "firebase-admin";
import serviceAccount from "../admin-key";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://memorize-paragraph-89b66.firebaseio.com"
});

const db = admin.firestore();

export { admin, db };
