import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithCredential,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "./firebase";

export const authService = {
  //email and password
  async register(email: string, password: string, displayName: string) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName });
    return userCredential.user;
  },
  async login(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  },

  async logout() {
    await signOut(auth);
  },

  async signInWithGoogle(idToken: string) {
    const credential = GoogleAuthProvider.credential(idToken);
    const result = await signInWithCredential(auth, credential);
    return result.user;
  },

  async signInWithApple(identityToken: string, nonce: string) {
    const provider = new OAuthProvider("apple.com");
    const credential = provider.credential({
      idToken: identityToken,
      rawNonce: nonce,
    });

    const result = await signInWithCredential(auth, credential);
    return result.user;
  },

  // Get current user
  getCurrentUser(): User | null {
    return auth.currentUser;
  },

  //auth state listener
  onAuthStateChanged(callback: (user: User | null) => void) {
    return auth.onAuthStateChanged(callback);
  },
};
