import firebase from "firebase/app";
import "firebase/firestore";





const firebaseConfig = {
    apiKey: "AIzaSyCFkFbe-xX3BdDWy9cSXos66WdVd31tzAI",
    authDomain: "invoiceapp-4153c.firebaseapp.com",
    projectId: "invoiceapp-4153c",
    storageBucket: "invoiceapp-4153c.appspot.com",
    messagingSenderId: "1023017182025",
    appId: "1:1023017182025:web:790f1c758ad92e48af7098"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
