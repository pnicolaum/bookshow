import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import SafeScreen from "../components/SafeScreen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useAuthStore } from "../store/authStore";
import { useEffect, useState, useCallback } from "react";

// Evita que el splash screen se oculte automáticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { checkAuth, user, token } = useAuthStore();

  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  useEffect(() => {
    async function prepareApp() {
      try {
        await checkAuth();
      } catch (e) {
        console.warn("Error checking auth:", e);
      } finally {
        setAppIsReady(true);
      }
    }

    if (fontsLoaded) {
      prepareApp();
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Manejo de navegación según autenticación
  useEffect(() => {
    const inAuthScreen = segments[0] === "(auth)";
    const isSignedIn = !!user && !!token;

    if (appIsReady) {
      if (!isSignedIn && !inAuthScreen) {
        router.replace("/(auth)");
      } else if (isSignedIn && inAuthScreen) {
        router.replace("/(tabs)");
      }
    }
  }, [user, token, segments, appIsReady]);

  if (!appIsReady) {
    // Puedes retornar null o un loader si quieres mostrar algo mientras se carga
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <SafeScreen>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(auth)" />
          </Stack>
        </SafeScreen>
        <StatusBar style="dark" />
      </View>
    </SafeAreaProvider>
  );
}
