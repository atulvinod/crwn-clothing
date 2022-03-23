import {getFirestore, getDoc, setDoc} from 'firebase/firestore';

const db = getFirestore();

export const getDocument = (reference) => {
    return getDoc(reference)
}

export const setDocument = (reference, data) =>{
    return setDoc(reference, data)
}

export const getDocumentReference = (collectionId, documentId) => {
    return doc(db, collectionId, documentId);
}

