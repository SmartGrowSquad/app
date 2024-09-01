import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Header from '@/components/header/Header';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PretendardBold: require('@/assets/fonts/Pretendard-Bold.ttf'), 
    PretendardSemiBold: require('@/assets/fonts/Pretendard-SemiBold.ttf'), 
    PretendardMedium: require('@/assets/fonts/Pretendard-Medium.ttf'), 
    PretendardRegular: require('@/assets/fonts/Pretendard-Regular.ttf'), 
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(home)" options={{ headerShown: false }}/>
          <Stack.Screen name="service" options={{ headerShown: false }} />
          <Stack.Screen name="passcode" options={{ headerShown: false }}/>
          <Stack.Screen name="search" options={{ headerShown: false }}/>
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
