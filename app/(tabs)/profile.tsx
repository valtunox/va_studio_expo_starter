import { useState } from 'react';
import { StyleSheet, ScrollView, View, Pressable, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { useAppTheme } from '@/hooks/useAppTheme';
import { PROFILE } from '@/constants/MockData';

const GOALS = [
  { icon: '🎯', label: 'Daily Calories', value: `${PROFILE.calorieTarget} kcal` },
  { icon: '🥩', label: 'Protein', value: `${PROFILE.proteinTarget}g` },
  { icon: '🍞', label: 'Carbs', value: `${PROFILE.carbsTarget}g` },
  { icon: '🥑', label: 'Fat', value: `${PROFILE.fatTarget}g` },
  { icon: '💧', label: 'Water', value: `${PROFILE.waterTarget} glasses` },
  { icon: '⚖️', label: 'Target Weight', value: `${PROFILE.targetWeight} lbs` },
];

const SETTINGS = [
  { section: 'Preferences', items: [
    { icon: 'notifications-outline', label: 'Meal Reminders', toggle: true, defaultOn: true },
    { icon: 'water-outline', label: 'Water Reminders', toggle: true, defaultOn: true },
    { icon: 'barbell-outline', label: 'Workout Tracking', toggle: true, defaultOn: false },
    { icon: 'globe-outline', label: 'Units', value: 'Imperial (lbs)' },
  ]},
  { section: 'App', items: [
    { icon: 'star-outline', label: 'Rate NutriLife' },
    { icon: 'share-outline', label: 'Share with Friends' },
    { icon: 'help-circle-outline', label: 'Help & FAQ' },
    { icon: 'document-text-outline', label: 'Privacy Policy' },
  ]},
];

export default function ProfileScreen() {
  const { colors, isDark } = useAppTheme();
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    'Meal Reminders': true,
    'Water Reminders': true,
    'Workout Tracking': false,
  });

  const bmi = ((PROFILE.currentWeight / (PROFILE.height * PROFILE.height)) * 703).toFixed(1);
  const bmiCategory = parseFloat(bmi) < 18.5 ? 'Underweight' : parseFloat(bmi) < 25 ? 'Normal' : parseFloat(bmi) < 30 ? 'Overweight' : 'Obese';

  return (
    <ScrollView style={[s.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      {/* Profile header */}
      <View style={s.profileHeader}>
        <View style={[s.avatar, { backgroundColor: colors.tint }]}>
          <ThemedText style={s.avatarText}>{PROFILE.name[0]}</ThemedText>
        </View>
        <ThemedText type="subtitle" style={{ marginTop: 14 }}>{PROFILE.name}</ThemedText>
        <View style={[s.dietBadge, { backgroundColor: colors.tint + '18' }]}>
          <ThemedText style={{ fontSize: 12, fontWeight: '700', color: colors.tint }}>{PROFILE.dietType} Diet</ThemedText>
        </View>

        {/* Stats row */}
        <View style={s.statsRow}>
          {[
            { label: 'Weight', value: `${PROFILE.currentWeight}`, unit: 'lbs', color: colors.tint },
            { label: 'BMI', value: bmi, unit: bmiCategory, color: parseFloat(bmi) < 25 ? colors.success : colors.warning },
            { label: 'Streak', value: `${PROFILE.streak}`, unit: 'days', color: '#f59e0b' },
          ].map(stat => (
            <View key={stat.label} style={[s.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <ThemedText style={[s.statValue, { color: stat.color }]}>{stat.value}</ThemedText>
              <ThemedText type="muted" style={s.statUnit}>{stat.unit}</ThemedText>
              <ThemedText type="muted" style={s.statLabel}>{stat.label}</ThemedText>
            </View>
          ))}
        </View>
      </View>

      {/* Nutrition Goals */}
      <View style={s.section}>
        <ThemedText type="defaultSemiBold" style={s.sectionTitle}>Nutrition Goals</ThemedText>
        <View style={[s.goalsCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          {GOALS.map((goal, i) => (
            <View key={goal.label}>
              <View style={s.goalRow}>
                <ThemedText style={{ fontSize: 18 }}>{goal.icon}</ThemedText>
                <ThemedText style={{ flex: 1, fontSize: 14 }}>{goal.label}</ThemedText>
                <ThemedText style={{ fontSize: 14, fontWeight: '700', color: colors.tint }}>{goal.value}</ThemedText>
              </View>
              {i < GOALS.length - 1 && <View style={[s.divider, { backgroundColor: colors.border }]} />}
            </View>
          ))}
        </View>
      </View>

      {/* Settings */}
      {SETTINGS.map(section => (
        <View key={section.section} style={s.section}>
          <ThemedText type="muted" style={s.settingSectionTitle}>{section.section}</ThemedText>
          <View style={[s.settingsCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            {section.items.map((item, i) => (
              <View key={item.label}>
                <Pressable style={s.settingRow}>
                  <Ionicons name={item.icon as any} size={20} color={colors.textSecondary} />
                  <ThemedText style={[s.settingLabel, { flex: 1 }]}>{item.label}</ThemedText>
                  {item.toggle ? (
                    <Switch
                      value={toggles[item.label] ?? item.defaultOn}
                      onValueChange={v => setToggles(t => ({ ...t, [item.label]: v }))}
                      trackColor={{ false: colors.border, true: colors.tint + '60' }}
                      thumbColor={toggles[item.label] ? colors.tint : colors.textSecondary}
                    />
                  ) : item.value ? (
                    <ThemedText type="muted" style={{ fontSize: 13 }}>{item.value}</ThemedText>
                  ) : (
                    <Ionicons name="chevron-forward" size={16} color={colors.textSecondary} />
                  )}
                </Pressable>
                {i < section.items.length - 1 && <View style={[s.divider, { backgroundColor: colors.border }]} />}
              </View>
            ))}
          </View>
        </View>
      ))}

      {/* Version */}
      <View style={s.versionContainer}>
        <ThemedText type="muted" style={{ fontSize: 11, textAlign: 'center' }}>NutriLife v1.0.0</ThemedText>
        <ThemedText type="muted" style={{ fontSize: 10, textAlign: 'center', marginTop: 2 }}>Built with Expo + VA Studio</ThemedText>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  profileHeader: { alignItems: 'center', paddingTop: 60, paddingBottom: 10 },
  avatar: { width: 80, height: 80, borderRadius: 40, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#fff', fontSize: 32, fontWeight: '900' },
  dietBadge: { marginTop: 8, paddingHorizontal: 14, paddingVertical: 5, borderRadius: 10 },
  statsRow: { flexDirection: 'row', gap: 10, marginTop: 20, paddingHorizontal: 20 },
  statCard: { flex: 1, alignItems: 'center', paddingVertical: 14, borderRadius: 14, borderWidth: 1 },
  statValue: { fontSize: 22, fontWeight: '900' },
  statUnit: { fontSize: 10, marginTop: 1 },
  statLabel: { fontSize: 10, marginTop: 4 },
  section: { paddingHorizontal: 20, marginTop: 24 },
  sectionTitle: { marginBottom: 12 },
  settingSectionTitle: { fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 },
  goalsCard: { borderRadius: 16, borderWidth: 1, overflow: 'hidden' },
  goalRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 14 },
  settingsCard: { borderRadius: 16, borderWidth: 1, overflow: 'hidden' },
  settingRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 14 },
  settingLabel: { fontSize: 14 },
  divider: { height: 1, marginHorizontal: 16 },
  versionContainer: { paddingVertical: 24 },
});
