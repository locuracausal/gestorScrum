    
//import { firebaseConfig } from './firebase-config';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
//import 'firebase/firebase-firestore';
//import 'firebase-admin';
const firebaseConfig = {
    apiKey: "AIzaSyB28SiRXzXt4PdeepGdgUym7XWh5KYWstw",
    authDomain: "gestorscrum.firebaseapp.com",
    databaseURL: "https://gestorscrum.firebaseio.com",
    projectId: "gestorscrum",
    storageBucket: "gestorscrum.appspot.com",
    messagingSenderId: "142439088048",
    appId: "1:142439088048:web:d15e88a0e90dddaf872075",
    measurementId: "G-PHVK5BHRMD"
  };

const firebase = require("firebase");

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = firebase.firestore();
        this.googleProvider = new app.auth.GoogleAuthProvider();
        //this.admin = require("firebase-admin");
        this.storage = app.storage()
       // this.userValidated = null;
    }

    


    signOut = () => console.log('llegue a sign out') ;//this.auth.signOut();

    logout =  async () =>  {
        //console.log('logout :' ,  this.auth.signOut())
        return await this.auth.signOut();
    }

    
       

    getCurrentUsername() {
        return this.auth.currentUser
    }

    getCurrentEmail(){
        return this.auth.currentUser
    }

}

export default new Firebase()
