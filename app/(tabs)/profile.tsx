import { TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearUser } from "@/redux/slices/userSlice";
import { authService } from "@/services/auth";
import { View, Text } from "@/components/ui/Styled";

export default function ProfileScreen() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    Alert.alert("Çıkış Yap", "Emin misin?", [
      {
        text: "İptal",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Çıkış Yap",
        onPress: async () => {
          try {
            await authService.logout();
            dispatch(clearUser());
            router.replace("/(auth)/login");
          } catch (error) {
            Alert.alert("Hata", "Çıkış yapılamadı");
          }
        },
        style: "destructive",
      },
    ]);
  };

  return (
    <View className="flex-1 bg-white px-5 py-8">
      <Text className="text-2xl font-bold mb-8 text-gray-900">Profil</Text>

      <View className="bg-gray-100 p-4 rounded-lg mb-6">
        <Text className="text-gray-600 text-sm mb-1">Ad Soyad</Text>
        <Text className="text-gray-900 text-lg font-semibold">
          {user?.displayName || "Belirtilmemiş"}
        </Text>
      </View>

      <View className="bg-gray-100 p-4 rounded-lg mb-8">
        <Text className="text-gray-600 text-sm mb-1">Email</Text>
        <Text className="text-gray-900 text-lg font-semibold">
          {user?.email}
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          padding: 14,
          borderRadius: 8,
          alignItems: "center",
          backgroundColor: "#ef4444",
        }}
      >
        <Text className="text-white font-bold text-base">Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}
