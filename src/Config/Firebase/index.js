import { initializeApp } from "firebase/app";
import {
  getDatabase,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
  onValue,
  remove,
  get,
} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXwiRhJjq2YbUN6k-sG3uXQJi4j1wonE4",
  authDomain: "shahsunaingadit.firebaseapp.com",
  databaseURL: "https://shahsunaingadit-default-rtdb.firebaseio.com",
  projectId: "shahsunaingadit",
  storageBucket: "shahsunaingadit.appspot.com",
  messagingSenderId: "87907396183",
  appId: "1:87907396183:web:7d3b87e49162b5a9615112",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {
  database,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
  onValue,
  remove,
  get,
};
