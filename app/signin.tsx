import { tw } from "@/lib/tailwind";
import { useAuthStore } from "@/stores/use-auth-store";
import { useRouter } from "expo-router";
import { Button, View } from "react-native";

const SignInScreen = () => {
    const login = useAuthStore((state) => state.login);
    const router = useRouter();

    const handleLogin = () => {
        login();
        router.replace('/(dashboard)');
    };
    return (
        <View style={tw`flex-1 items-center justify-center bg-neutral-00`}>
            <Button title="Login" onPress={handleLogin} />
        </View>
    )
}

export default SignInScreen;