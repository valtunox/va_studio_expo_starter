import { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Animated, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { ThemedText } from '@/components/ThemedText';

SplashScreen.preventAutoHideAsync();

function AppSplash({ onFinish }: { onFinish: () => void }) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.8));
  const [slideAnim] = useState(new Animated.Value(30));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(fadeAnim, { toValue: 1, useNativeDriver: true, tension: 40, friction: 8 }),
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true, tension: 40, friction: 8 }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
    ]).start();

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: true }).start(onFinish);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.splash}>
      <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }], alignItems: 'center' }}>
        <View style={styles.splashIcon}>
          <ThemedText style={styles.splashEmoji}>🥗</ThemedText>
        </View>
        <Animated.View style={{ transform: [{ translateY: slideAnim }], opacity: fadeAnim }}>
          <ThemedText style={styles.splashTitle}>NutriLife</ThemedText>
          <ThemedText style={styles.splashSub}>Your nutrition companion</ThemedText>
        </Animated.View>
      </Animated.View>
      <ThemedText style={styles.splashFooter}>Powered by VA Studio</ThemedText>
    </View>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [showSplash, setShowSplash] = useState(true);

  const onSplashFinish = useCallback(() => {
    setShowSplash(false);
    SplashScreen.hideAsync();
  }, []);

  if (showSplash) {
    return <AppSplash onFinish={onSplashFinish} />;
  }

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1, backgroundColor: '#0a0f0d',
    alignItems: 'center', justifyContent: 'center',
  },
  splashIcon: {
    width: 100, height: 100, borderRadius: 30,
    backgroundColor: '#10b98118',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 24,
    borderWidth: 2, borderColor: '#10b98130',
  },
  splashEmoji: { fontSize: 48 },
  splashTitle: {
    fontSize: 36, fontWeight: '900', color: '#f0fdf4',
    textAlign: 'center', letterSpacing: -1,
  },
  splashSub: {
    fontSize: 15, color: '#6b7280', textAlign: 'center', marginTop: 6,
  },
  splashFooter: {
    position: 'absolute', bottom: 50,
    fontSize: 11, color: '#374151', letterSpacing: 1,
  },
});
