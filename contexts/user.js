import React, {createContext, useState} from 'react';

import firebaseApp from "../services/firebase";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut as signOutFirebase,
    onAuthStateChanged,
  } from "firebase/auth";


const auth = getAuth();

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {
    useEffect(() => {
      onAuthStateChanged(auth, (userState) => {
        setUser(userState);
      });
    }, []);
  
    const [user, setUser] = useState({ nome: "Joaozinho" });
  
    const signIn = async (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((resp) => {})
        .catch((err) => console.warn(err));
    };
  
    const signUp = async (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((resp) => {})
        .catch((err) => console.warn(err));
    };
  
    const signOut = () => {
      signOutFirebase(auth)
        .then((resp) => {
          console.warn("Usuário deslogado!");
        })
        .catch((err) => console.warn(err));
    };
  
    return(
        <UsuarioContext.Provider value={{user}}>
            {children}
        </UsuarioContext.Provider>
    )
}


export {UsuarioContext, UsuarioProvider}