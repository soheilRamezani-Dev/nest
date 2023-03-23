import {
  collection,
  collectionGroup,
  documentId,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { Category, ProductCartInfo } from "../components/types";
import database from "../firebase/firestore";

export async function useGetProducts() {
  let products: ProductCartInfo[] = [];
  let categoriesId: string[] = [];
  const q = query(
    collectionGroup(database, "products"),
    orderBy("sell_count", "desc"),
    limit(30)
  );
  const snapshot = await getDocs(q);
  snapshot.forEach((item) => {
    const categoryId = item.ref.path.split("/")[1];

    products = [
      ...products,
      { id: item.id, categoryId, ...item.data() } as ProductCartInfo,
    ];
    if (!categoriesId.includes(item.ref.parent.parent?.id as string)) {
      categoriesId.push(item.ref.parent.parent?.id as string);
    }
  });

  return { products, categoriesId };
}

export async function useGetCategoriesInfo(categoriesId: string[]) {
  let categoriesInfo: Category[] = [];
  const q = query(
    collection(database, "category"),
    where(documentId(), "in", categoriesId)
  );
  if (categoriesId) {
    const snapshot = await getDocs(q);
    snapshot.forEach((item) => {
      categoriesInfo = [
        ...categoriesInfo,
        {
          id: item.id,
          title: item.data().title,
          url: "/category/" + item.data().slug,
        },
      ];
    });
  }

  return categoriesInfo;
}
