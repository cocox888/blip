import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDuuZfDnAvjqPTOe11MHF2uYj-BN3SNXcc",
    authDomain: "blip-4d54d.firebaseapp.com",
    projectId: "blip-4d54d",
    storageBucket: "blip-4d54d.firebasestorage.app",
    messagingSenderId: "233580640746",
    appId: "1:233580640746:web:ea86a83ecada58ac459a93",
    measurementId: "G-YN07NM1WM4"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { app, auth, db };