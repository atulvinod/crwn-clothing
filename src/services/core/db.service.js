import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
  writeBatch,
} from "firebase/firestore";

const db = getFirestore();

export const getDocument = (reference) => {
  return getDoc(reference);
};

export const setDocument = (reference, data) => {
  return setDoc(reference, data);
};

export const getDocumentReference = (collectionId, documentId) => {
  return doc(db, collectionId, documentId);
};

/*
To add a collection to the database based on a collectionKey,
we upload the collection to the database via transactions, and it works
based on batches
**/
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  // We create a batch to perform a transaction on firebase
  const batch = writeBatch(db);

  //we iterate over each object and create an object reference based on the collection
  //that we have passed and add the reference to the batch
  objectsToAdd.forEach((e)=>{
    const docRef = doc(collectionRef, e.title.toLowerCase());
    batch.set(docRef, e);
  })

  //finally we commit the batch and begin the transaction
  await batch.commit();
};
