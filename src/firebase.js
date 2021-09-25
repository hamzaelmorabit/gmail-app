import  firebase from "firebase";

// import "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyCNS5OPMOLf10n48VkSFVO2itgEcDAAcy8",
//   authDomain: "facebook-2-3db8e.firebaseapp.com",
//   projectId: "facebook-2-3db8e",
//   storageBucket: "facebook-2-3db8e.appspot.com",
//   messagingSenderId: "524348946988",
//   appId: "1:524348946988:web:4ab9b7073c9729703b6f89",
// };
// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

// const db = app.firestore();
// const storage = firebase.storage();

// export { db, storage };

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6C-LuarsNVN7Bn2KuqdwmumpNbu71a0M",
  authDomain: "clone-7b98d.firebaseapp.com",
  projectId: "clone-7b98d",
  storageBucket: "clone-7b98d.appspot.com",
  messagingSenderId: "5340413978",
  appId: "1:5340413978:web:a54eaf4ede7cf3704311a3",
};


const firebaseConfig2 = {
  apiKey: "AIzaSyC9ERNOi_4qT86h6jrphURReNF3GSirhNM",
  authDomain: "test-connected-5eb29.firebaseapp.com",
  projectId: "test-connected-5eb29",
  storageBucket: "test-connected-5eb29.appspot.com",
  messagingSenderId: "496887985892",
  appId: "1:496887985892:web:7a7f0b3101a6ae99981ef1",
  measurementId: "G-5LGB3SPXD7",
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
