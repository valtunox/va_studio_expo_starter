import { useColorScheme } from 'react-native';
import { Colors, type ThemeColors } from '@/constants/Colors';

export function useAppTheme(): { colors: ThemeColors; isDark: boolean } {
  const scheme = useColorScheme() ?? 'dark';
  return { colors: Colors[scheme], isDark: scheme === 'dark' };
}
