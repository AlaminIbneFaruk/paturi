//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "firebase/app";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  const firebaseConfig = {
//    apiKey: "AIzaSyDO7SxKCLb9u9UBUzbC5nD7xmSm-lpUGD8",
//    authDomain: "gemini-api-content.firebaseapp.com",
//    projectId: "gemini-api-content",
//    storageBucket: "gemini-api-content.firebasestorage.app",
//    messagingSenderId: "243967088592",
//    appId: "1:243967088592:web:ea469ab1e0b57b279b4bd5"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);


//  import { initializeApp } from "firebase/app";
//  import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

//  // TODO(developer) Replace the following with your app's Firebase configuration
//  // See: https://firebase.google.com/docs/web/learn-moreconfig-object
//  const firebaseConfig = {
//    // ...
//  };

//  // Initialize FirebaseApp
//  const firebaseApp = initializeApp(firebaseConfig);

//  // Initialize the Gemini Developer API backend service
//  const ai = getAI(firebaseApp, { backend: new GoogleAIBackend() });

//  // Create a `GenerativeModel` instance with a model that supports your use case
//  const model = getGenerativeModel(ai, { model: "gemini-2.0-flash" });
