// Réexporte les services Firebase centralisés
import { db, auth, storage } from "../firebase/config";

export { db, auth, storage };

export default { db, auth, storage };
