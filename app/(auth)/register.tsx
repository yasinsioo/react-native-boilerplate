import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter, Link } from "expo-router";
import { useAppDispatch } from "@/redux/hooks";
import { setUser, setLoading, setError } from "@/redux/slices/userSlice";
import { authService } from "@/services/auth";
import { View, Text } from "@/components/ui/Styled";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoadingLocal] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleRegister = async () => {
    if (!email || !password || !displayName) {
      Alert.alert("Hata", "Tüm alanlar gerekli");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Hata", "Şifre en az 6 karakter olmalı");
      return;
    }

    setLoadingLocal(true);
    dispatch(setLoading(true));

    try {
      const user = await authService.register(email, password, displayName);
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email || "",
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );
      router.replace("/(tabs)/home");
    } catch (error: any) {
      const errorMessage = error.message || "Kayıt başarısız";
      dispatch(setError(errorMessage));
      Alert.alert("Hata", errorMessage);
    } finally {
      setLoadingLocal(false);
      dispatch(setLoading(false));
    }
  };

  return (
    <View className="flex-1 justify-center px-5 bg-white">
      <Text className="text-2xl font-bold mb-8 text-center text-gray-900">
        Kayıt Ol
      </Text>

      <TextInput
        placeholder="Ad Soyad"
        value={displayName}
        onChangeText={setDisplayName}
        editable={!loading}
        style={{
          borderWidth: 1,
          borderColor: "#e5e5e5",
          padding: 12,
          marginBottom: 15,
          borderRadius: 8,
          fontSize: 16,
        }}
        placeholderTextColor="#999"
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        editable={!loading}
        style={{
          borderWidth: 1,
          borderColor: "#e5e5e5",
          padding: 12,
          marginBottom: 15,
          borderRadius: 8,
          fontSize: 16,
        }}
        placeholderTextColor="#999"
      />

      <TextInput
        placeholder="Şifre (min 6 karakter)"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={!loading}
        style={{
          borderWidth: 1,
          borderColor: "#e5e5e5",
          padding: 12,
          marginBottom: 20,
          borderRadius: 8,
          fontSize: 16,
        }}
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        onPress={handleRegister}
        disabled={loading}
        style={{
          padding: 14,
          borderRadius: 8,
          alignItems: "center",
          backgroundColor: loading ? "#d1d5db" : "#2563eb",
        }}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-bold text-base">Kayıt Ol</Text>
        )}
      </TouchableOpacity>

      <View className="mt-5 items-center">
        <Text className="text-gray-600">Zaten hesabın var mı? </Text>
        <Link href="/(auth)/login" asChild>
          <TouchableOpacity>
            <Text className="text-blue-600 font-bold">Giriş Yap</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
