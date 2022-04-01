import { getCollectionAndDocuments } from "..";

export const getShopCategories = async () => {
  const collection = await getCollectionAndDocuments("categories");
  const categories = collection.reduce((acc, element) => {
    const { title, items } = element.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categories;
};
