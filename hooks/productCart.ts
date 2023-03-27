import {
  collection,
  collectionGroup,
  DocumentData,
  documentId,
  getDocs,
  limit,
  orderBy,
  Query,
  query,
  where,
} from "firebase/firestore";
import { Category, ProductCartInfo } from "../components/types";
import database from "../firebase/firestore";

export async function useGetProducts(query: Query<DocumentData>) {
  let products: ProductCartInfo[] = [];
  let categoriesId: string[] = [];
  const snapshot = await getDocs(query);
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
export async function useGetTopSellingProducts() {
  const q = query(
    collectionGroup(database, "products"),
    orderBy("sell_count", "desc"),
    limit(3)
  );
  const { products } = await useGetProducts(q);
  return products;
}

export async function useGetTrendingProducts() {
  const q = query(
    collectionGroup(database, "products"),
    orderBy("visit_count", "desc"),
    limit(3)
  );
  const { products } = await useGetProducts(q);
  return products;
}

export async function useGetRecentlyAddedProducts() {
  const q = query(
    collectionGroup(database, "products"),
    orderBy("time_of_submit", "desc"),
    limit(3)
  );
  const { products } = await useGetProducts(q);
  return products;
}
export async function useGetTopRatedProducts() {
  const q = query(
    collectionGroup(database, "products"),
    orderBy("time_of_submit", "desc"),
    limit(3)
  );
  const { products } = await useGetProducts(q);
  return products;
}
