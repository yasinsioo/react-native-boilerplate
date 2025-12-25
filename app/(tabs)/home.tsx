import { useAppSelector } from "@/redux/hooks";
import { View, Text } from "@/components/ui/Styled";

export default function HomeScreen() {
  const user = useAppSelector((state) => state.user.user);

  return (
    <View className="flex-1 justify-center items-center bg-white px-5">
      <Text className="text-3xl font-bold mb-4 text-gray-900">
        Hoş Geldin! 👋
      </Text>

      {user && (
        <>
          <Text className="text-xl text-gray-700 mb-2">
            {user.displayName || "Kullanıcı"}
          </Text>
          <Text className="text-sm text-gray-500">{user.email}</Text>
        </>
      )}

      <Text className="text-gray-600 mt-8 text-center leading-6">
        Bu boilerplate ile hızlıca React Native uygulamalar oluşturabilirsin.
      </Text>
    </View>
  );
}
