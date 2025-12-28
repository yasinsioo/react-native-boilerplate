import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setUser,
  setLoading,
  setError,
  clearUser,
} from "@/redux/slices/userSlice";
import { setError as setErrorGlobal } from "@/redux/slices/errorSlice";
import { authService } from "@/services/auth";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(setLoading(true));

    try {
      const unsubscribe = authService.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          dispatch(
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email || "",
              displayName: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
            })
          );
        } else {
          dispatch(clearUser());
        }
        dispatch(setLoading(false));
      });

      return () => unsubscribe();
    } catch (err: any) {
      console.error("Auth hook error:", err);
      dispatch(setLoading(false));
      dispatch(setError(err.message));
      dispatch(setErrorGlobal(err.message || "Auth initialization failed"));
      dispatch(clearUser());
    }
  }, [dispatch]);

  return { user, loading, error };
};
