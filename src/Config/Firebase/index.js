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
  apiKey: "AIzaSyBsvvsd9Fam6ABc8y5xfVKq-Hl5ZjbLG2M",
  authDomain: "shahsunaingadir.firebaseapp.com",
  projectId: "shahsunaingadir",
  storageBucket: "shahsunaingadir.appspot.com",
  messagingSenderId: "404060708114",
  appId: "1:404060708114:web:2929ca8097c12573bc27cb",
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
