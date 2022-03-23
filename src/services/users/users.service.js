import { getDocument, getDocumentReference, setDocument } from "../core";

export const createUser = async (userAuth) => {
  /**
   * The reference which is returned does not necessarily contain the data, instead it
   * gives us a pointer to a location where data can be stored
   */
  const userDocRef = getDocumentReference("users", userAuth.uid);

  //Using the reference we can get the document
  /**
   * using userSnapshot.exists() = > will return bool indicating if the reference has data
   */
  const userSnapshot = await getDocument(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDocument(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {}
  }

  return userDocRef;
};
