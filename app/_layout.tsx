import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import 'react-native-reanimated';
import { setStatusBarStyle } from "expo-status-bar";

import { useColorScheme } from '@/components/useColorScheme';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCredentials } from '@/store/slices/authSlice';
import { setUser } from '@/store/slices/userSlice';

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
  const [appIsReady, setAppIsReady] = useState(false);
  const [loaded, error] = useFonts({
    PretendardBold: require('@/assets/fonts/Pretendard-Bold.ttf'), 
    PretendardSemiBold: require('@/assets/fonts/Pretendard-SemiBold.ttf'), 
    PretendardMedium: require('@/assets/fonts/Pretendard-Medium.ttf'), 
    PretendardRegular: require('@/assets/fonts/Pretendard-Regular.ttf'), 
    ...FontAwesome.font,
  });

  
  const loadUserFromStorage = async (dispatch: any) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const user = await AsyncStorage.getItem('user').then((res) => JSON.parse(res!));

      if (token && user) {
        console.log('Loaded user from storage', user);
        dispatch(setUser(user));
        dispatch(setCredentials({ accessToken: token, email: user.email }));
      }
    } catch (e) {
      console.error('Failed to load user from storage', e);
    }
  };
  useEffect(() => {
    async function prepare() {
      try {
        if (error) throw error;
        await loadUserFromStorage(store.dispatch);
        
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render

        // 로그인 정보 불러오기
        setAppIsReady(true);

        
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("dark");
    }, 0);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <Stack>
              <Stack.Screen name="(home)" options={{ headerShown: false }}/>
              <Stack.Screen name="service" options={{ headerShown: false }} />
              <Stack.Screen name="passcode" options={{ headerShown: false }}/>
              <Stack.Screen name="search" options={{ headerShown: false }}/>
              <Stack.Screen name="setting" options={{ headerShown: false }}/>  
              <Stack.Screen name="auth" options={{ headerShown: false }}/>
            </Stack>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </Provider>
  );
}
