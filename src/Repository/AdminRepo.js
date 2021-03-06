import { Component } from 'react';
import firebase from '../config/firebase';
/* import { createPalette } from '@material-ui/core'; */
const collection = 'Admin';

class AdminRepo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            data: {
            },

        }
    }

    getAdminId = async () => {// 
        try {
            let coleccion = await firebase.db.collection(collection).get();
            let usuarios = coleccion.docs.map(doc => doc.id);
            return usuarios;
        } catch (error) {
            console.log("Error en el Repo", error)
            throw new Error();
        }
    };

    getExistsAdmin = async function (email) {      // Buscamos el admin por ID para verificar que esté en la base de datos
        try{
          let doc = await firebase.db.collection(collection).doc(email).get()
        
          if (!doc.exists) {
            return false;
          } else {
            return true; 
          }
        }
        catch(err){
          console.log('Error getting document', err);
          return false;
        }
        
        
    }
    

    



    // function UserRepo(){
        
    //     async function getUsers(){

            

    //         try {
    //             await connection.collection(users).get().then((querySnapshot) => {
    //                 querySnapshot.forEach((doc) => {
    //                     console.log(doc)
    //                     console.log(`${doc.Hola} => ${doc.data().Hola}`);
    //                 });
    //             });
                
                

    //         } catch (error) {
    //             console.log(error);
    //             console.log(" Rompio en Repo users");
    //         }

    //     }
        

    // }


}


export default new AdminRepo();