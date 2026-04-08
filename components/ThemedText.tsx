import { Text, type TextProps, StyleSheet } from 'react-native';
import { useAppTheme } from '@/hooks/useAppTheme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'muted';
};

export function ThemedText({ style, type = 'default', ...rest }: ThemedTextProps) {
  const { colors } = useAppTheme();
  const color = type === 'muted' ? colors.textSecondary : colors.text;

  return (
    <Text
      style={[
        { color },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'defaultSemiBold' && styles.defaultSemiBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && [styles.link, { color: colors.tint }],
        type === 'muted' && styles.muted,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: { fontSize: 16, lineHeight: 24 },
  defaultSemiBold: { fontSize: 16, lineHeight: 24, fontWeight: '600' },
  title: { fontSize: 32, fontWeight: '800', lineHeight: 40 },
  subtitle: { fontSize: 20, fontWeight: '700', lineHeight: 28 },
  link: { fontSize: 16, lineHeight: 24 },
  muted: { fontSize: 14, lineHeight: 20 },
});
