import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, updateUserProfilePicture } from "./firebase";

export const uploadUserProfilePicture = async (
  file: File,
  uid: string
): Promise<string | null> => {
  const location = `profile-pictures/${uid}/${file.name}`;

  const profilePictureRef = ref(storage, location);

  await uploadBytes(profilePictureRef, file)
    .then((snapShot) => {
      console.log(snapShot);
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });

  const url: string | null = await getDownloadURL(profilePictureRef)
    .then((url) => url)
    .catch((err) => {
      console.error("an error occurred when getting the download url", err);
      return null;
    });

  if (url) {
    await updateUserProfilePicture(url).catch((err) => {
      console.error(
        "an error occurred when updating the user profile picture",
        err
      );
    });
  }

  return url;
};
