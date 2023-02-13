import firebaseConfig from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";

const database = getFirestore(firebaseConfig);

export default database;
