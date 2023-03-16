import { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../src/firebase'

const useAuth = () => {

//Show cureently sign in user
  const [cureentUser, setCurrentUser] = useState({})
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });

  return {
    cureentUser,
  };
};

export default useAuth