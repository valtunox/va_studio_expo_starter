import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { ThemedText } from './ThemedText';

interface Props {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  label?: string;
  sublabel?: string;
}

export function ProgressRing({
  value, size = 130, strokeWidth = 10,
  color = '#10b981', trackColor = '#1f2e28',
  label, sublabel,
}: Props) {
  const progress = Math.min(100, Math.max(0, value));
  const deg = (progress / 100) * 360;

  // CSS conic-gradient ring — works on web; on native we fall back to a simpler bar.
  if (Platform.OS === 'web') {
    return (
      <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            width: size, height: size, borderRadius: size / 2,
            // @ts-ignore: web-only
            background: `conic-gradient(${color} ${deg}deg, ${trackColor} ${deg}deg)`,
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <View style={{
            width: size - strokeWidth * 2, height: size - strokeWidth * 2,
            borderRadius: (size - strokeWidth * 2) / 2,
            backgroundColor: trackColor === '#1f2e28' ? '#0a0f0d' : '#fafafa',
            alignItems: 'center', justifyContent: 'center',
          }}>
            {label != null && (
              <View style={{ alignItems: 'center' }}>
                <ThemedText style={{ fontWeight: '800', fontSize: size * 0.18 }}>{label}</ThemedText>
                {sublabel && <ThemedText type="muted" style={{ fontSize: size * 0.085 }}>{sublabel}</ThemedText>}
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }

  // Native fallback — simple circular border
  return (
    <View style={{
      width: size, height: size, borderRadius: size / 2,
      borderWidth: strokeWidth, borderColor: trackColor,
      alignItems: 'center', justifyContent: 'center',
    }}>
      {label != null && (
        <View style={{ alignItems: 'center' }}>
          <ThemedText style={{ fontWeight: '800', fontSize: size * 0.18 }}>{label}</ThemedText>
          {sublabel && <ThemedText type="muted" style={{ fontSize: size * 0.085 }}>{sublabel}</ThemedText>}
        </View>
      )}
    </View>
  );
}
