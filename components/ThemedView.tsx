import { View, type ViewProps } from 'react-native';
import { useAppTheme } from '@/hooks/useAppTheme';

export type ThemedViewProps = ViewProps & {
  variant?: 'default' | 'card' | 'surface';
};

export function ThemedView({ style, variant = 'default', ...rest }: ThemedViewProps) {
  const { colors } = useAppTheme();
  const bg = variant === 'card' ? colors.card : variant === 'surface' ? colors.surface : colors.background;
  return <View style={[{ backgroundColor: bg }, style]} {...rest} />;
}
