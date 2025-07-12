import { useRouter } from "expo-router";
import { Button, View } from "react-native";

import { useAuthStore } from "@/stores/use-auth-store";

const SignInScreen = () => {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.replace("/(dashboard)");
  };
  return (
    <View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default SignInScreen;
