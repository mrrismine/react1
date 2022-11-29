import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDHmGex6abtuBTIM8lTJf0BMX6fYzbizIU",
  authDomain: "crown-clothing-15509.firebaseapp.com",
  projectId: "crown-clothing-15509",
  storageBucket: "crown-clothing-15509.appspot.com",
  messagingSenderId: "329983575488",
  appId: "1:329983575488:web:4ab04cc9aefcad85177425"
};

initializeApp(firebaseConfig);

export const auth = getAuth()
const provider = new GoogleAuthProvider()
provider.getCustomParameters({
  prompt: "select_account"
})
export const signInwithGooglePopUp = () => signInWithPopup(auth,provider)

export const db = new getFirestore()

export const addCollectionProduct = async (collectionKey, objectToAdd, field) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

export const getCategoriesProduct = async () => {
  const collectionRef = collection(db, 'category')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  },{})
  return categoryMap
}

export const createUserFromAuth = async(userAuth,additionalInformaation) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  const getDocRef = await getDoc(userDocRef)
  const {email,displayName} = userAuth
  const createdAt = new Date()
  if(!getDocRef.exists()) {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformaation
    })
    console.log("user has been made")
  }
  return userDocRef
}

export const signInwithUserEmailandPassword = async (email,password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password)
}

export const CreateUserAndPassword = async(email,password) => {
  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth,email,password)
}

export const SignOutUser = async () => signOut(auth)

export const OnAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)