
import React, { createContext, useState, useEffect } from 'react';
import firebase from '../firebase/config'
export const FirebaseContext = createContext();

const FirebaseContextProvider = (props) => {
  const [projects, setProjects] = useState(null);
  const [skills, setSkills] = useState(null);
  const [technologies, setTechnologies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      let data = await db.collection("projects").get();
      setProjects(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      data = await db.collection("skills").get();
      setSkills(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      data = await db.collection("technologies").get();
      setTechnologies(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <FirebaseContext.Provider value={{ projects, skills, technologies }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseContextProvider;