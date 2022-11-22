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
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
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
