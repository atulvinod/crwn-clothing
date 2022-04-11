import { getCollectionAndDocuments } from "..";

export const getShopCategories = async () => {
  console.log('get shop')
  const collection = await getCollectionAndDocuments("categories");
  const categories = collection.reduce((acc, element) => {
    const { title, items } = element.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categories;
};
