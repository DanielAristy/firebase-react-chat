import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBGEEnma24zE7QX6_cH-3I0vZ5ncwWBLaQ",
    authDomain: "fir-reactchat-e2abb.firebaseapp.com",
    projectId: "fir-reactchat-e2abb",
    storageBucket: "fir-reactchat-e2abb.appspot.com",
    messagingSenderId: "211105915867",
    appId: "1:211105915867:web:9a5b3b42b4daa033d87dfe",
    measurementId: "G-G00J5GRKSH"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();