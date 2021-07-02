import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyABwCy81BdBJwkFiEd3831S1w7kEND-AFM",
    authDomain: "time-schedule-58a95.firebaseapp.com",
    databaseURL: "time-schedule-58a95.firebaseio.com",
    projectId: "time-schedule-58a95",
    storageBucket: "time-schedule-58a95.appspot.com",
    messagingSenderId: "502283815228",
    appId: "1:502283815228:web:e2d4af25dc15759b94b639",
    measurementId: "G-MXWK01YSER",
};

// Firebaseを紐付け、初期化
export const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firestoreのインスタンス作成
export const firebaseStore = firebaseApp.firestore();

export default firebase;