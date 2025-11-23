// lib/uploadImage.js
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseClient";

export function uploadImageFile(file, path = `properties/${Date.now()}_${file.name}`, onProgress) {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, path);
    const task = uploadBytesResumable(storageRef, file);
    task.on("state_changed", 
      snapshot => {
        if (onProgress) {
          const pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress(Math.round(pct));
        }
      },
      err => reject(err),
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve(url);
      }
    );
  });
}
